// Dummy data for articles - in a real application, this would come from the database
const articles = [
  { id: 1, title: 'News Article 1', content: 'This is article 1 content.' },
  { id: 2, title: 'News Article 2', content: 'This is article 2 content.' },
];

// Controller to fetch all articles
const getAllArticles = (req, res) => {
  res.render('articles', {
    title: 'News Articles',
    articles: articles,
  });
};

// Controller to fetch a single article
const getArticleById = (req, res) => {
  const articleId = req.params.id;
  const article = articles.find(article => article.id == articleId);
  
  if (!article) {
    return res.status(404).send('Article not found');
  }

  res.render('article', {
    title: article.title,
    article: article,
  });
};

module.exports = { getAllArticles, getArticleById }