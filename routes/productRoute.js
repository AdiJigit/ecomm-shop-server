import express from "express";
import Product from "../models/productModel.js";

const productRouter = express.Router();

//get all products
productRouter.get("/all", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

//get product by id
productRouter.get("/find/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Blog not found!" });
  }
});

//count products for admin panel
productRouter.get("/countProducts", async (req, res) => {
  try {
    //getting only non-admin users
    const countProducts = await Product.countDocuments();
    res.status(200).json({ count: countProducts });
  } catch (err) {
    console.log(err.message);
  }
});

//count products sum for admin panel
productRouter.get("/countSumProducts", async (req, res) => {
  try {
    //getting only non-admin users
    const countSumProducts = await Product.countDocuments();
    res.status(200).json({ count: countSumProducts });
  } catch (err) {
    console.log(err.message);
  }
});

//delete product
productRouter.delete("/delete/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(200).json("Product has been deleted!");

  try {
  } catch (err) {
    console.log("Can't be deleted!");
  }
});

//update product
productRouter.put("/update", async (req, res) => {
  const product = await Product.findById(req.body._id);

  //if product exists
  if (product) {
    product.title = req.body.title || product.title;
    product.category = req.body.category || product.category;
    product.subcategory = req.body.subcategory || product.subcategory;
    product.description = req.body.description || product.description;
    product.price = req.body.price || product.price;
    product.star = req.body.star || product.star;
    product.sizes = req.body.sizes || product.sizes;
    product.colors = req.body.colors || product.colors;
    product.image = req.body.image || product.image;
    product.image = req.body.image || product.imageOne;

    const updatedProduct = await product.save();
    res.send({
      _id: updatedProduct._id,
      title: updatedProduct.title,
      category: updatedProduct.category,
      subcategory: updatedProduct.subcategory,
      description: updatedProduct.description,
      price: updatedProduct.price,
      star: updatedProduct.star,
      sizes: updatedProduct.sizes,
      colors: updatedProduct.colors,
      image: updatedProduct.image,
      imageOne: updatedProduct.imageOne,
    });
  } else {
    res.status(404).send({ message: "Product not found!" });
  }
});

//for add product -> from admin panel
productRouter.post("/add", async (req, res) => {
  const newProduct = new Product({
    description: req.body.description,
    title: req.body.title,
    category: req.body.category,
    subcategory: req.body.subcategory,
    description: req.body.description,
    price: req.body.price,
    star: req.body.star + "⭐",
    sizes: req.body.sizes,
    colors: req.body.colors,
    image: req.body.image,
    imageOne: req.body.imageOne,
  });
  const product = await newProduct.save();
  res.send({
    _id: product._id,
    title: product.title,
    category: product.category,
    subcategory: product.subcategory,
    description: product.description,
    price: product.price,
    star: product.star,
    sizes: product.sizes,
    colors: product.colors,
    image: product.image,
    imageOne: product.imageOne,
  });
});

export default productRouter;
