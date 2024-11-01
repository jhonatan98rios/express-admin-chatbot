const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const Company = require('./models/Company');
const companyRoutes = require('./routes/companyRoutes');

require('dotenv').config()

const app = express();

// Conectar ao MongoDB
mongoose.connect(process.env.CONNECTION_STRING);

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Para arquivos estáticos, se necessário

// Usar as rotas de empresa
app.use('/admin/companies', companyRoutes);


// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
