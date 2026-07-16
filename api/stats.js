import clientPromise from "../lib/mongodb.js";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("quiz"); // Cambia por el nombre de tu base de datos
    const collection = db.collection("stats");

    // Manejar diferentes métodos HTTP
    switch (req.method) {
      // Crear (POST)
      case "POST": {
        const result = await collection.insertOne({
          ...req.body,
          createdAt: new Date(),
        });

        return res.status(200).json({
          success: true,
          id: result.insertedId,
        });
      }

      // Leer (GET)
      case "GET": {
        const stats = await collection.find({}).toArray(); // Obtener todas las estadísticas
        return res.status(200).json({
          success: true,
          data: stats,
        });
      }

      // Actualizar (PUT)
      case "PUT": {
        const { id, ...updateData } = req.body;

        if (!id) {
          return res.status(400).json({
            success: false,
            error: "Missing 'id' in request body",
          });
        }

        const result = await collection.updateOne(
          { _id: new ObjectId(id) }, // Filtrar por ID
          { $set: updateData } // Actualizar los campos proporcionados
        );

        if (result.matchedCount === 0) {
          return res.status(404).json({
            success: false,
            error: "Document not found",
          });
        }

        return res.status(200).json({
          success: true,
          message: "Document updated successfully",
        });
      }

      // Eliminar (DELETE)
      case "DELETE": {
        const { id } = req.body;

        if (!id) {
          return res.status(400).json({
            success: false,
            error: "Missing 'id' in request body",
          });
        }

        const result = await collection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
          return res.status(404).json({
            success: false,
            error: "Document not found",
          });
        }

        return res.status(200).json({
          success: true,
          message: "Document deleted successfully",
        });
      }

      // Método no permitido
      default:
        return res.status(405).json({
          success: false,
          error: "Method not allowed",
        });
    }
  } catch (error) {
    console.error("Error handling request:", error);

    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}