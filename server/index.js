require("dotenv").config();
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

// CORS fix — allow all (untuk deploy Replit)
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

// folder uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API routes
app.use("/api", orderRoutes);
app.use("/api/admin/products", productRoutes);
app.use("/api", reviewRoutes);

// PERBAIKAN DI SINI: Menggunakan "0.0.0.0" agar bisa diakses public via Replit
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running at http://0.0.0.0:${PORT}`);
});