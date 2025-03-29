import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000; // Сервер будет работать на порту 5000

// Middleware
app.use(cors()); // Разрешаем CORS
app.use(bodyParser.json()); // Парсим JSON

// Настраиваем Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // Твой e-mail
    pass: process.env.PASSWORD, // Пароль приложения
  },
});

// Обработчик POST-запроса с формы
app.post("/send", async (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "Email и сообщение обязательны!" });
  }

  const mailOptions = {
    from: email, // Отправитель (почта партнёра)
    to: process.env.EMAIL, // Твоя почта (куда придёт сообщение)
    subject: "Новое сообщение с сайта",
    text: `От: ${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: "Сообщение отправлено!" });
  } catch (error) {
    console.error("Ошибка при отправке email:", error);
    res.status(500).json({ error: "Ошибка при отправке письма" });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
