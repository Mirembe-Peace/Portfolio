const express = require('express');
const router = express.Router();

//routes
router.get('', (req, res) => {
    res.render('blog_admin');
});

router.get('/blog_page_01', (req, res) => {
    res.render('blog_page_01');
});

module.exports = browser;