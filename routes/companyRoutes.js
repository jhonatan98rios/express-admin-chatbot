const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
const { ensureAuthenticated } = require('../middleware/auth');

// Rotas para empresas
router.get('/', ensureAuthenticated, companyController.getCompanies); // Lista todas as empresas
router.get('/new', ensureAuthenticated, companyController.getNewCompanyForm); // Exibe o formulário de nova empresa
router.post('/', ensureAuthenticated, companyController.createCompany); // Cria uma nova empresa
router.get('/:id/edit', ensureAuthenticated, companyController.getEditCompanyForm); // Exibe o formulário de edição
router.post('/:id', ensureAuthenticated, companyController.updateCompany); // Atualiza a empresa
router.post('/:id/delete', ensureAuthenticated, companyController.deleteCompany); // Exclui a empresa

module.exports = router;