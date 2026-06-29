const fs = require('fs');
const path = require('path');

module.exports = function handler(req, res) {
  // Configuración de CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { username, password } = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    // Leer el archivo JSON local de forma segura en el servidor
    const filePath = path.join(process.cwd(), 'api', 'users.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const usuarios = JSON.parse(fileData);

    // Buscar si coinciden usuario y contraseña
// Dentro de tu api/login.js la comparación debe usar .code en vez de .password
const usuarioValido = usuarios.find(
    u => u.username.toLowerCase() === username.toLowerCase() && u.code === code
  );
  
    if (usuarioValido) {
      // 🚀 En lugar de devolver la contraseña, devolvemos un "token" de éxito simulado
      return res.status(200).json({
        ok: true,
        username: usuarioValido.username,
        token: `simulated-jwt-token-for-${usuarioValido.username}`
      });
    } else {
      return res.status(401).json({ ok: false, error: 'Usuario o contraseña incorrectos' });
    }

  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
};