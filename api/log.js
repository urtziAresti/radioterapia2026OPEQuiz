export default function handler(req, res) {
  // CORS para desarrollo local e integración con Ionic
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Responder rápido al preflight de CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Guardrail: Solo aceptamos POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      ok: false,
      error: 'Method not allowed'
    });
  }

  try {
    // Aseguramos el parseo del body si viene como string
    const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    // Extraemos la metadata de red básica
    const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress;

    console.log('========== 🚀 VERCEL APP LOG ==========');
    console.log('Recibido el:', new Date().toISOString());
    console.log('IP del Cliente:', ip);
    console.log('---------------------------------------');
    
    // Imprime TODO el objeto estructurado que envió Angular (evento, data, user, url, timestamp)
    console.log('Payload Completo:', JSON.stringify(payload, null, 2));
    
    console.log('=======================================');

    // Respondemos éxito al cliente (Angular)
    return res.status(200).json({
      ok: true,
      message: 'Log registrado correctamente'
    });

  } catch (err) {
    console.error('❌ LOG API CRITICAL ERROR');
    console.error(err);

    return res.status(500).json({
      ok: false,
      error: err.message
    });
  }
}