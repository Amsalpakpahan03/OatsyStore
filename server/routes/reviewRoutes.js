const express = require("express");
const Review = require("../models/reviewModel");

const router = express.Router();

// Tambah review
router.post("/products/:id/reviews", async (req, res) => {
  try {
    const { name, comment, rating } = req.body;

    const review = await Review.create({
      productId: req.params.id,
      name,
      comment,
      rating,
    });

    res.status(201).json({ success: true, message: "Review added", review });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Ambil review per produk
router.get("/products/:id/reviews", async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.id }).sort({
      createdAt: -1,
    });

    res.json({ success: true, reviews });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
