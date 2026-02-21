import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { fullName, company, email, phone, request } = req.body || {};

  const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
  const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

  if (!SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL) {
    return res.status(500).json({
      ok: false,
      error: "Missing env vars. Set SMTP_USER, SMTP_PASS, CONTACT_EMAIL",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Landing per PMI" <${SMTP_USER}>`,
      to: CONTACT_EMAIL,
      subject: `Nuova richiesta - ${fullName || "Senza nome"}`,
      text: `
Nome: ${fullName || "-"}
Azienda: ${company || "-"}
Email: ${email || "-"}
Telefono: ${phone || "-"}

Richiesta:
${request || "-"}
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      error: error?.message || "Email send failed",
    });
  }
}