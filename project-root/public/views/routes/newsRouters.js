const express = require('express');
const router = express.Router();
const { getAllArticles, getArticleById } = require('../controllers/newsController');

// Route to fetch all articles
router.get('/articles', getAllArticles);

// Route to fetch a single article
router.get('/articles/:id', getArticleById);

module.exports = router