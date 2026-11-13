import clientPromise from "../lib/mongodb.js";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("quiz");
    const collection = db.collection("stats");

    switch (req.method) {
      case "GET": {
        const playerName = req.query.playerName?.trim();

        // DETALLE DE UN USUARIO
        if (playerName) {
          const stats = await collection
            .find({
              $expr: {
                $eq: [
                  { $trim: { input: "$playerName" } },
                  playerName
                ]
              }
            })
            .sort({ createdAt: -1 })
            .toArray();

          return res.status(200).json({
            success: true,
            data: stats
          });
        }

        // RESUMEN GENERAL: UNA FILA POR USUARIO
        const stats = await collection.aggregate([
          {
            $match: {
              playerName: { $nin: [null, ""] }
            }
          },
          {
            $addFields: {
              normalizedPlayerName: {
                $trim: {
                  input: {
                    $convert: {
                      input: "$playerName",
                      to: "string",
                      onError: "",
                      onNull: ""
                    }
                  }
                }
              },
              elapsedParts: {
                $split: [
                  {
                    $convert: {
                      input: { $ifNull: ["$elapsedTime", ""] },
                      to: "string",
                      onError: "",
                      onNull: ""
                    }
                  },
                  ":"
                ]
              },
              questionsNumber: {
                $convert: {
                  input: "$totalQuestions",
                  to: "int",
                  onError: 0,
                  onNull: 0
                }
              },
              correctNumber: {
                $convert: {
                  input: "$correctAnswers",
                  to: "int",
                  onError: 0,
                  onNull: 0
                }
              }
            }
          },
          {
            $addFields: {
              elapsedSeconds: {
                $switch: {
                  branches: [
                    {
                      case: { $eq: [{ $size: "$elapsedParts" }, 3] },
                      then: {
                        $add: [
                          {
                            $multiply: [
                              {
                                $convert: {
                                  input: { $arrayElemAt: ["$elapsedParts", 0] },
                                  to: "int",
                                  onError: 0,
                                  onNull: 0
                                }
                              },
                              3600
                            ]
                          },
                          {
                            $multiply: [
                              {
                                $convert: {
                                  input: { $arrayElemAt: ["$elapsedParts", 1] },
                                  to: "int",
                                  onError: 0,
                                  onNull: 0
                                }
                              },
                              60
                            ]
                          },
                          {
                            $convert: {
                              input: { $arrayElemAt: ["$elapsedParts", 2] },
                              to: "int",
                              onError: 0,
                              onNull: 0
                            }
                          }
                        ]
                      }
                    },
                    {
                      case: { $eq: [{ $size: "$elapsedParts" }, 2] },
                      then: {
                        $add: [
                          {
                            $multiply: [
                              {
                                $convert: {
                                  input: { $arrayElemAt: ["$elapsedParts", 0] },
                                  to: "int",
                                  onError: 0,
                                  onNull: 0
                                }
                              },
                              60
                            ]
                          },
                          {
                            $convert: {
                              input: { $arrayElemAt: ["$elapsedParts", 1] },
                              to: "int",
                              onError: 0,
                              onNull: 0
                            }
                          }
                        ]
                      }
                    }
                  ],
                  default: 0
                }
              }
            }
          },
          {
            $match: {
              normalizedPlayerName: { $ne: "" }
            }
          },
          {
            $group: {
              _id: "$normalizedPlayerName",

              totalTests: { $sum: 1 },
              totalQuestions: { $sum: "$questionsNumber" },
              correctAnswers: { $sum: "$correctNumber" },
              totalSeconds: { $sum: "$elapsedSeconds" },
              lastAttempt: { $max: "$createdAt" },

              quizTypes: {
                $push: {
                  quiz_type: "$quiz_type",
                  totalQuestions: "$questionsNumber",
                  correctAnswers: "$correctNumber",
                  percentage: "$percentage"
                }
              }
            }
          },
          {
            $project: {
              _id: 0,
              playerName: "$_id",
              totalTests: 1,
              totalQuestions: 1,
              correctAnswers: 1,
              totalSeconds: 1,
              lastAttempt: 1,
              quizTypes: 1,

              // Porcentaje ponderado sobre todas las preguntas
              averagePercentage: {
                $cond: [
                  { $gt: ["$totalQuestions", 0] },
                  {
                    $round: [
                      {
                        $multiply: [
                          {
                            $divide: [
                              "$correctAnswers",
                              "$totalQuestions"
                            ]
                          },
                          100
                        ]
                      },
                      2
                    ]
                  },
                  0
                ]
              }
            }
          },
          {
            $sort: {
              lastAttempt: -1
            }
          }
        ]).toArray();

        return res.status(200).json({
          success: true,
          data: stats
        });
      }

      // CREAR ESTADÍSTICA
      case "POST": {
        const result = await collection.insertOne({
          ...req.body,
          createdAt: new Date()
        });

        return res.status(200).json({
          success: true,
          id: result.insertedId
        });
      }

      // ACTUALIZAR ESTADÍSTICA
      case "PUT": {
        const { id, ...updateData } = req.body;

        if (!id || !ObjectId.isValid(id)) {
          return res.status(400).json({
            success: false,
            error: "Invalid id"
          });
        }

        const result = await collection.updateOne(
          { _id: new ObjectId(id) },
          { $set: updateData }
        );

        if (result.matchedCount === 0) {
          return res.status(404).json({
            success: false,
            error: "Document not found"
          });
        }

        return res.status(200).json({
          success: true,
          message: "Document updated successfully"
        });
      }

      // ELIMINAR ESTADÍSTICA
      case "DELETE": {
        const { id } = req.body;

        if (!id || !ObjectId.isValid(id)) {
          return res.status(400).json({
            success: false,
            error: "Invalid id"
          });
        }

        const result = await collection.deleteOne({
          _id: new ObjectId(id)
        });

        if (result.deletedCount === 0) {
          return res.status(404).json({
            success: false,
            error: "Document not found"
          });
        }

        return res.status(200).json({
          success: true,
          message: "Document deleted successfully"
        });
      }

      default:
        return res.status(405).json({
          success: false,
          error: "Method not allowed"
        });
    }
  } catch (error) {
    console.error("Error handling request:", error);

    return res.status(500).json({
      success: false,
      error: error.message || "Internal server error"
    });
  }
}