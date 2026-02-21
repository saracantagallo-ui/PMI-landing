import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // support cross‑origin clients (the SPA runs on a different port in dev)
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

  // basic validation to avoid sending empty messages
  if (!fullName || !email || !request) {
    return res.status(400).json({ ok: false, error: "fullName, email and request are required" });
  }

  const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
  const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587", 10);
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

  if (!SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL) {
    return res.status(500).json({
      ok: false,
      error:
        "Missing env vars. Set SMTP_USER, SMTP_PASS, CONTACT_EMAIL (and optionally SMTP_HOST/SMTP_PORT) in your environment.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    // compute both plain-text and simple HTML versions of the message
    const textBody =
      `Nome: ${fullName}\n` +
      `Azienda/P.IVA: ${company || "-"}\n` +
      `Email: ${email}\n` +
      `Telefono: ${phone || "-"}\n\n` +
      `Richiesta:\n${request}`;

    const htmlBody = `
<h2>Nuova richiesta di contatto</h2>
<p><strong>Nome:</strong> ${fullName}</p>
<p><strong>Azienda/P.IVA:</strong> ${company || "-"}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Telefono:</strong> ${phone || "-"}</p>
<br>
<p><strong>Richiesta:</strong></p>
<p>${request.replace(/\n/g, '<br>')}</p>
`;

    await transporter.sendMail({
      from: `"Landing per PMI" <${SMTP_USER}>`,
      to: CONTACT_EMAIL,
      subject: `Nuova richiesta - ${fullName}`,
      text: textBody,
      html: htmlBody,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error("contact handler error", err);
    return res.status(500).json({ ok: false, error: err?.message || "Failed to send email" });
  }
}