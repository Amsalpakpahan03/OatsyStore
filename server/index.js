const express = require("express");
const path = require("path");
const connectDB = require("./db");
const orderRoutes = require("./orderRoutes");
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect MongoDB
connectDB();

// CORS fix (allow all for deploy)
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// folder uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API routes
app.use("/api", orderRoutes);
app.use("/api/admin/products", productRoutes);
app.use("/api", reviewRoutes);

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
