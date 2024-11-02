const express = require('express');
const router = express.Router();

require('dotenv').config()

// Dados de login (substitua por valores reais)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

// Exibe o formulário de login
router.get('/login', (req, res) => {
    res.render('login', { error: null });
});

// Processa o login
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    console.log("username: ", username)
    console.log("password: ", password)

    console.log("ADMIN_USERNAME: ", ADMIN_USERNAME)
    console.log("ADMIN_PASSWORD: ", ADMIN_PASSWORD)

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        req.session.isAuthenticated = true;
        res.redirect('/admin/companies');
    } else {
        res.render('login', { error: 'Credenciais inválidas' });
    }
});

// Logout
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
        }
        res.redirect('/login');
    });
});

module.exports = router;
