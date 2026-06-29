const fs = require('fs');
const path = require('path');

module.exports = function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    // Forzamos la extracción manual del body pase lo que pase
    let datos = req.body;
    if (typeof req.body === 'string') {
      datos = JSON.parse(req.body);
    }

    // IMPRIMIR EN CONSOLA PARA DEPURAR (Mira tu terminal al presionar el botón)
    console.log('--- DATOS RECIBIDOS EN LOGIN ---', datos);

    // Evitamos el error usando variables tradicionales seguras
    const username = datos && datos.username ? datos.username : null;
    const code = datos && datos.code ? datos.code : null;

    if (!username || !code) {
      return res.status(400).json({ ok: false, error: 'Falta el campo usuario o el campo code en la peticion' });
    }

    const filePath = path.join(process.cwd(), 'api', 'usuarios.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const usuarios = JSON.parse(fileData);

    const usuarioValido = usuarios.find(
      u => u.username.toLowerCase() === username.trim().toLowerCase() && 
           u.code.toString().trim() === code.toString().trim()
    );

    if (usuarioValido) {
      return res.status(200).json({ ok: true, username: usuarioValido.username });
    } else {
      return res.status(401).json({ ok: false, error: 'Usuario o código incorrectos' });
    }

  } catch (err) {
    console.error('Error grave:', err);
    return res.status(500).json({ ok: false, error: err.message });
  }
};