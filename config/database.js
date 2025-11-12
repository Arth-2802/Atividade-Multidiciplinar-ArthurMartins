const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Atlas conectado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
