import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message?: string;
  error?: string;
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { subject, message } = req.body;

    // Configuração do transportador de e-mail
    console.log("eee", {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "maisumvoo@outlook.com",
      subject: subject,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res
        .status(200)
        .json({ message: "Email enviado com sucesso", success: true });
    } catch (error) {
      console.log("error: ", error);
      res.status(500).json({ error: "Falha ao enviar email", success: false });
    }
  } else {
    res.status(405).json({ error: "Método não permitido", success: false });
  }
}
