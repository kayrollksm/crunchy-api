import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  // ✅ Tambah CORS header dulu
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end(); // ✅ Jawab preflight terus
  }

  const { nama, telefon, email, referral, pendaftar_id, batch } = req.body;

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
  );

  const { error } = await supabase.from("pendaftar").insert([
    { nama, telefon, email, referral, pendaftar_id, batch }
  ]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ success: true });
}
