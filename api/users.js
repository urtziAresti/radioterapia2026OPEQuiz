import clientPromise from "../src/app/services/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;

    const db = client.db("users"); 
    const collection = db.collection("users");

    switch (req.method) {
      case "GET": {
        const users = await collection.find({}).toArray();
        return res.status(200).json(users);
      }

      case "POST": {
        const { username, code } = req.body;

        if (!username || !code) {
          return res.status(400).json({
            success: false,
            error: "username y code son obligatorios",
          });
        }

        const exists = await collection.findOne({
          $or: [{ username }, { code }],
        });

        if (exists) {
          return res.status(409).json({
            success: false,
            error: "El usuario ya existe",
          });
        }

        const result = await collection.insertOne({
          username,
          code,
          createdAt: new Date(),
        });

        return res.status(201).json({
          success: true,
          id: result.insertedId,
        });
      }

      default:
        return res.status(405).json({
          success: false,
          error: "Method not allowed",
        });
    }
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}