import express from "express";
import Cart from "../models/Cart.js";

const router = express.Router();

// GET - Get cart by session ID
router.get("/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;

    let cart = await Cart.findOne({ sessionId });

    if (!cart) {
      cart = new Cart({ sessionId, items: [] });
      await cart.save();
    }

    res.json({
      success: true,
      data: cart.items,
    });
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching cart",
      error: error.message,
    });
  }
});

// POST - Save entire cart
router.post("/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { items } = req.body;

    let cart = await Cart.findOne({ sessionId });

    if (!cart) {
      cart = new Cart({ sessionId, items });
    } else {
      cart.items = items;
    }

    await cart.save();

    res.json({
      success: true,
      data: cart.items,
    });
  } catch (error) {
    console.error("Error saving cart:", error);
    res.status(500).json({
      success: false,
      message: "Error saving cart",
      error: error.message,
    });
  }
});

export default router;
