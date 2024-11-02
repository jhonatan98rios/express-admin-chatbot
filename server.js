const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const companyRoutes = require('./routes/companyRoutes');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config()

const app = express();

// Configuração da sessão
app.use(session({
  secret: process.env.SECRET_KEY, // Substitua por uma chave secreta mais complexa
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Para ambientes de produção, utilize secure: true com HTTPS
}));

// Conectar ao MongoDB
mongoose.connect(process.env.CONNECTION_STRING);

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Para arquivos estáticos, se necessário

// Usar as rotas de empresa
app.use('/admin/companies', companyRoutes);

// Usar as rotas de empresa
app.use('/', authRoutes);


// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
