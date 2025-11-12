require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/database');

const app = express();

// Conectar ao MongoDB
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname)));

// Rotas da API
app.get('/api', (req, res) => {
  res.json({ message: 'API funcionando!', status: 'online' });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    database: 'connected',
    timestamp: new Date().toISOString()
  });
});

// Rota para cadastro
app.post('/api/cadastro', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    
    // Aqui você pode adicionar a lógica para salvar no MongoDB
    console.log('Dados recebidos:', { nome, email });
    
    res.json({ 
      success: true, 
      message: 'Cadastro recebido com sucesso!',
      data: { nome, email }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Erro ao processar cadastro',
      error: error.message 
    });
  }
});

// Rota principal - serve o index.html (deve vir por último)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Para desenvolvimento local
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
}

// Exportar para Vercel (serverless)
module.exports = app;
