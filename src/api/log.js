export default function handler(req, res) {
  // CORS para desarrollo
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      ok: false,
      error: 'Method not allowed'
    });
  }

  try {
    console.log('========== APP LOG ==========');
    console.log('Timestamp:', new Date().toISOString());
    console.log('IP:', req.headers['x-forwarded-for'] || req.socket?.remoteAddress);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    console.log('=============================');

    return res.status(200).json({
      ok: true
    });
  } catch (err) {
    console.error('LOG API ERROR');
    console.error(err);

    return res.status(500).json({
      ok: false,
      error: err.message
    });
  }
}