const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/news_website", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Import routes
const indexRouter = require("./routes/index");
const newsRoutes = require("./routes/newsRoutes");
const articleRoutes = require("./routes/article");
app.use("/api", articleRoutes);

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

// DATABASE CONNECTION
mongoose
  .connect("mongodb://localhost:27017/nyour_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database", err);
  });

// Simple route for testing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Listen on port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:3000`);
});

app.listen(3000, () => {
  console.log("Server is running on the http://localhost:3000");
});
// Set up view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Use routes
app.use("/", indexRouter);
app.use("/", newsRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
