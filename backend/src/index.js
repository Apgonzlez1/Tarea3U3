const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

let posts = [];

// Endpoints
app.post('/posts', (req, res) => {
  const { message } = req.body;
  if (!message || message.length > 280) {
    console.warn('⚠️  Mensaje inválido recibido');
    return res.status(400).json({ error: "Invalid message" });
  }

  const post = { id: Date.now(), message, date: new Date() };
  posts.unshift(post);
  console.log('📝 Nuevo post recibido:', post);
  res.status(201).json(post);
});

app.get('/posts', (req, res) => {
  console.log('📥 Solicitando lista de posts');
  res.json(posts);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor Express iniciado con éxito!`);
  console.log(`🌐 Escuchando en: http://localhost:${PORT}`);
  console.log('✅ Backend conectado y funcionando 🟢');
});
