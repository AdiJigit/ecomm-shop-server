import express from "express";
import Rating from "../models/ratingModel.js";

const ratingRouter = express.Router();

//get all ratings -> for frontend
ratingRouter.get("/all", async (req, res) => {
  const rating = await Rating.find();
  res.send(rating);
});

export default ratingRouter;
