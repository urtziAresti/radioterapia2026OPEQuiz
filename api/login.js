import bcrypt from "bcryptjs";
import clientPromise from "../src/app/services/mongodb";

// 🧠 Memoria volátil del servidor para trackear las sesiones por dispositivo
const sesionesActivas = {};

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    let datos = req.body;

    if (typeof datos === "string") {
      datos = JSON.parse(datos);
    }

    const username = datos?.username?.trim();
    const code = datos?.code?.trim();
    const deviceId = datos?.deviceId?.trim();

    if (!username || !code || !deviceId) {
      return res.status(400).json({
        ok: false,
        error: "Falta usuario, código o ID de dispositivo",
      });
    }

    const client = await clientPromise;

    const db = client.db("users");
    const users = db.collection("users");

    const usuario = await users.findOne({
      username: {
        $regex: `^${username}$`,
        $options: "i",
      },
    });

    if (!usuario) {
      return res.status(401).json({
        ok: false,
        error: "Usuario o código incorrectos",
      });
    }

    // 🚫 Usuario desactivado
    if (usuario.active === false) {
      return res.status(403).json({
        ok: false,
        error: "Esta cuenta está desactivada.",
      });
    }

    // 🔐 Comparar el código cifrado
    const valido = await bcrypt.compare(code, usuario.code);

    if (!valido) {
      return res.status(401).json({
        ok: false,
        error: "Usuario o código incorrectos",
      });
    }

    // 🚨 Control de sesiones
    const usuarioKey = usuario.username.toLowerCase();

    if (
      sesionesActivas[usuarioKey] &&
      sesionesActivas[usuarioKey] !== deviceId
    ) {
      return res.status(403).json({
        ok: false,
        error: "Esta cuenta ya está siendo utilizada en otro dispositivo.",
      });
    }

    sesionesActivas[usuarioKey] = deviceId;

    return res.status(200).json({
      ok: true,
      username: usuario.username,
    });

  } catch (err) {
    console.error("ERROR LOGIN");
    console.error(err);

    return res.status(500).json({
      ok: false,
      error: err.message,
    });
  }
}