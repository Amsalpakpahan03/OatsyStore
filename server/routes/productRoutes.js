const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

const {
  getProducts,
  addProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/", getProducts);

// upload single file
router.post("/", upload.single("image"), addProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
