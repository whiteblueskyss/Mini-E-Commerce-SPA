import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import cartRouter from "./routes/cart.js";
import productsRouter from "./routes/products.js";

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const URL =
  "mongodb+srv://whiteblueskyss:123qwe@cluster0.zpr77yk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use routes
app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
