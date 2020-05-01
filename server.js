const express = require("express");
const shortid = require("shortid");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// var data = require("./build/data.json");
const app = express();
app.use(bodyParser.json());
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost/react-shopping-cart",
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }
);
app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res) => res.sendFile(__dirname + "/build/index.html"));

// products
const Product = mongoose.model(
  "product",
  new mongoose.Schema({
    _id: {
      type: String,
      default: shortid.generate,
    },
    title: String,
    image: String,
    description: String,
    price: Number,
    availableSizes: [String],
  })
);

app.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});
app.post("/api/products", async (req, res) => {
  if (
    !req.body.title ||
    !req.body.image ||
    !req.body.description ||
    !req.body.price ||
    !req.body.availableSizes
  ) {
    return res.status(400).send({ message: "Data Required" });
  }
  const newProduct = await new Product(req.body).save();
  res.send(newProduct);
});
app.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete({
    _id: req.params.id,
  });
  res.send(deletedProduct);
});
// orders
const Order = mongoose.model(
  "order",
  new mongoose.Schema(
    {
      _id: {
        type: String,
        default: shortid.generate,
      },
      email: String,
      name: String,
      address: String,
      total: Number,
      cartItems: [
        {
          _id: String,
          title: String,
          price: Number,
          count: Number,
        },
      ],
    },
    { timestamps: true }
  )
);
app.get("/api/orders", async (req, res) => {
  const orders = await Order.find({});
  res.send(orders);
});
app.post("/api/orders", async (req, res) => {
  console.log(req.body);
  if (
    !req.body.email ||
    !req.body.name ||
    !req.body.total ||
    !req.body.address ||
    !req.body.cartItems
  ) {
    return res.status(400).send({ message: "Data Required" });
  }
  const newOrder = await new Order(req.body).save();
  res.send(newOrder);
});
app.delete("/api/orders/:id", async (req, res) => {
  const deletedOrder = await Order.findByIdAndDelete({
    _id: req.params.id,
  });
  res.send(deletedOrder);
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Serve at http://localhost:" + port));
