const fs = require('fs');
const path = require('path');

// 🧠 Memoria volátil del servidor para trackear las sesiones por dispositivo
const sesionesActivas = {};

module.exports = function handler(req, res) {
  // Configuración de CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    // Forzamos la extracción manual del body por seguridad
    let datos = req.body;
    if (typeof req.body === 'string') {
      datos = JSON.parse(req.body);
    }

    const username = datos?.username?.trim();
    const code = datos?.code?.trim();
    const deviceId = datos?.deviceId?.trim(); // 👈 Recibimos el identificador del dispositivo

    // Validar que vengan todos los campos obligatorios
    if (!username || !code || !deviceId) {
      return res.status(400).json({ ok: false, error: 'Falta usuario, código o ID de dispositivo' });
    }

    // 1. Validar las credenciales con tu JSON de usuarios
    const filePath = path.join(process.cwd(), 'api', 'usuarios.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const usuarios = JSON.parse(fileData);

    const usuarioValido = usuarios.find(
      u => u.username.toLowerCase() === username.toLowerCase() && 
           u.code.toString().trim() === code
    );

    if (!usuarioValido) {
      return res.status(401).json({ ok: false, error: 'Usuario o código incorrectos' });
    }

    // 2. 🚨 CONTROL DE SESIONES COMPARTIDAS
    const usuarioKey = username.toLowerCase();

    if (sesionesActivas[usuarioKey] && sesionesActivas[usuarioKey] !== deviceId) {
      // Si la cuenta ya tiene un deviceId registrado y NO coincide con el actual, rebotamos la petición
      return res.status(403).json({ 
        ok: false, 
        error: 'Esta cuenta ya está siendo utilizada en otro dispositivo.' 
      });
    }

    // 3. Registrar o actualizar el dispositivo activo para este usuario
    sesionesActivas[usuarioKey] = deviceId;
    console.log('--- 📱 SESIONES ACTIVAS EN MEMORIA ---', sesionesActivas);

    return res.status(200).json({ 
      ok: true, 
      username: usuarioValido.username 
    });

  } catch (err) {
    console.error('Error grave en login:', err);
    return res.status(500).json({ ok: false, error: err.message });
  }
};