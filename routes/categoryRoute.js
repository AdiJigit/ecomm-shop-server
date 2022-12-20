import express from "express";
import Category from "../models/categoryModel.js";

const categoryRouter = express.Router();

//get all categories -> for frontend
categoryRouter.get("/all", async (req, res) => {
  const category = await Category.find();
  res.send(category);
});

export default categoryRouter;
