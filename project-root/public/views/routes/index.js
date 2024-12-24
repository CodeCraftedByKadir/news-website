const express = require("express");
const router = express.Router();

// Controller function for handling homepage request
const { getHomePage } = require("../controllers/homeController");

// Route to serve homepage
router.get("/", getHomePage);

module.exports = router;
