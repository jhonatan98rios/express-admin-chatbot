const Company = require('../models/Company'); // Importar seu modelo

// Função para listar todas as empresas
exports.getCompanies = async (req, res) => {
    try {
        const companies = await Company.find(); // Mude para o método correto do seu modelo
        res.render('companies', { companies });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao buscar empresas");
    }
};

// Função para exibir o formulário de nova empresa
exports.getNewCompanyForm = (req, res) => {
    res.render('new_company');
};

// Função para criar uma nova empresa
exports.createCompany = async (req, res) => {
    try {
        const newCompany = new Company(req.body);
        await newCompany.save(); // Salvar a nova empresa no banco de dados
        res.redirect('/admin/companies');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao criar empresa");
    }
};

// Função para editar uma empresa (caso necessário)
exports.getEditCompanyForm = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        res.render('edit_company', { company });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao buscar empresa");
    }
};

// Função para atualizar uma empresa (caso necessário)
exports.updateCompany = async (req, res) => {
    try {
        await Company.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/admin/companies');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao atualizar empresa");
    }
};

// Função para excluir uma empresa
exports.deleteCompany = async (req, res) => {
    try {
        await Company.findByIdAndDelete(req.params.id);
        res.redirect('/admin/companies');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao excluir empresa");
    }
};
