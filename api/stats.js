import clientPromise from "../lib/mongodb.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  try {
    const client = await clientPromise;

    const db = client.db("quiz"); // Cambia por el nombre de tu base de datos
    const collection = db.collection("stats");

    const result = await collection.insertOne({
      ...req.body,
      createdAt: new Date(),
    });

    return res.status(200).json({
      success: true,
      id: result.insertedId,
    });
  } catch (error) {
    console.error("Error saving stats:", error);

    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}