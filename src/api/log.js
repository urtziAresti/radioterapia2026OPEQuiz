export default function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const log = {
      ...req.body,
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
    };
  
    console.log('[APP LOG]', JSON.stringify(log));
  
    // opcional: aquí podrías guardar en DB (Supabase, KV, etc.)
    return res.status(200).json({ ok: true });
  }