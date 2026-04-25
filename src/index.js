const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Root endpoint
 * GET /
 */
app.get("/", (req, res) => {
  res.send("Hello DevOps");
});

/**
 * Health check endpoint
 * GET /health
 */
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

/**
 * Start the server
 */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});