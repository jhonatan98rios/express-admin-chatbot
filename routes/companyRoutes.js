const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

// Rotas para empresas
router.get('/', companyController.getCompanies); // Lista todas as empresas
router.get('/new', companyController.getNewCompanyForm); // Exibe o formulário de nova empresa
router.post('/', companyController.createCompany); // Cria uma nova empresa
router.get('/:id/edit', companyController.getEditCompanyForm); // Exibe o formulário de edição
router.post('/:id', companyController.updateCompany); // Atualiza a empresa
router.post('/:id/delete', companyController.deleteCompany); // Exclui a empresa

module.exports = router;