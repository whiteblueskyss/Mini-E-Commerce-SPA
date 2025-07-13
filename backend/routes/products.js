import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// GET - Fetch all products
router.get("/", async (req, res) => {
  try {
    // First try to get products from database
    const dbProducts = await Product.find();

    // Return products from database
    res.json({
      success: true,
      message: "Products fetched successfully",
      data: dbProducts,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching products",
      error: error.message,
    });
  }
});

// POST - Add new product
router.post("/", async (req, res) => {
  try {
    const {
      id,
      title,
      price,
      image,
      description,
      category,
      brand,
      stock,
      rating,
      reviews,
    } = req.body;

    // Validate required fields
    if (
      !id ||
      !title ||
      !price ||
      !image ||
      !description ||
      !category ||
      !brand
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
        required: [
          "id",
          "title",
          "price",
          "image",
          "description",
          "category",
          "brand",
        ],
      });
    }

    // Check if product with same ID already exists
    const existingProduct = await Product.findOne({ id });
    if (existingProduct) {
      return res.status(409).json({
        success: false,
        message: "Product with this ID already exists",
      });
    }

    // Create new product
    const newProduct = new Product({
      id,
      title,
      price,
      image,
      description,
      category,
      brand,
      stock,
      rating,
      reviews,
    });

    // Save to database
    const savedProduct = await newProduct.save();

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: savedProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Product with this ID already exists",
      });
    }

    res.status(500).json({
      success: false,
      message: "Error creating product",
      error: error.message,
    });
  }
});

export default router;
