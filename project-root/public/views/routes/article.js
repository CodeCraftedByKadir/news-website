const express = require("express");
const app = express();
const Article = require("./models/article"); // Import the Article model

app.use(express.json()); // for handling JSON data

// Route to handle article creation (POST)
app.post("/articles", async (req, res) => {
  try {
    const { title, content, image } = req.body;
    const newArticle = new Article({ title, content, image });
    await newArticle.save();
    res
      .status(201)
      .json({ message: "Article created successfully", article: newArticle });
  } catch (error) {
    res.status(400).json({ message: "Error creating article", error });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Route to get all articles (GET)
app.get("/articles", async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(400).json({ message: "Error fetching articles", error });
  }
});

// POST - Create a new article
router.post("/articles", async (req, res) => {
  const { title, content, image } = req.body;

  try {
    const newArticle = new Article({
      title,
      content,
      image,
    });

    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(400).json({ message: "Error creating article", error });
  }
});

// PUT - Update an article
router.put("/articles/:id", async (req, res) => {
  const { title, content, image } = req.body;
  const { id } = req.params;

  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      id,
      { title, content, image },
      { new: true }
    );
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(400).json({ message: "Error updating article", error });
  }
});

// DELETE - Delete an article by ID
router.delete("/articles/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Article.findByIdAndDelete(id);
    res.status(200).json({ message: "Article deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting article", error });
  }
});
