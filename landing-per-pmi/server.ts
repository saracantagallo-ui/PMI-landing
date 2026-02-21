import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/contact", async (req, res) => {
    const { fullName, company, email, phone, request } = req.body;

    console.log("Received contact request:", { fullName, company, email, phone, request });

    const contactEmail = process.env.CONTACT_EMAIL || "saradesigntutorials@gmail.com";
    
    // SMTP Configuration
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.warn("SMTP not configured. Email NOT sent to", contactEmail);
      return res.status(200).json({ 
        status: "ok", 
        message: "Request received, but email delivery is not configured on the server." 
      });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Landing per PMI" <${smtpUser}>`,
        to: contactEmail,
        subject: `Nuova richiesta da ${fullName} - Landing per PMI`,
        text: `
          Nome: ${fullName}
          Azienda/P.IVA: ${company}
          Email: ${email}
          Telefono: ${phone}
          
          Richiesta:
          ${request}
        `,
        html: `
          <h2>Nuova richiesta di contatto</h2>
          <p><strong>Nome:</strong> ${fullName}</p>
          <p><strong>Azienda/P.IVA:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${phone}</p>
          <br>
          <p><strong>Richiesta:</strong></p>
          <p>${request.replace(/\n/g, '<br>')}</p>
        `,
      });

      console.log("Email sent successfully to", contactEmail);
      res.json({ status: "ok" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ status: "error", message: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
