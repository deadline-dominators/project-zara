const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");
require("dotenv").config();
const JWT_SECRET = process.env.jwt;
const clientRouter = require("./routers/clientRouter.js");
const routerProduct = require("./routers/productRouter.js");
const categoryRouter = require("./routers/categoryRouter.js");
const sellerRouter = require("./routers/sellerRouter.js");
const adminRouter = require("./routers/adminRouter.js")
//temp
const Product = require("./database/models/productModel.js");
const connection = require("./database/index.js");
const population = require("./database/models/population.js");
const app = express();
const bcrypt = require("bcryptjs");
const salt = 10;
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
const port = 3001;

const corsOptions = {
  origin: "http://localhost:3000", // Replace with the origin of your frontend application
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow cookies and credentials to be sent cross-origin
};
app.use(cors());
// here routers
app.use("/api/ecommerce", clientRouter);
app.use("/api/product", routerProduct);
app.use("/api/category", categoryRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/admin",adminRouter)
// temporaire
const verifyToken = (token) => {
  try {
    const verify = jwt.verify(token, process.env.jwt);
    if (verify.type === "client") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(JSON.stringify(error), "error");
    return false;
  }
};
app.post(
  "/addProduct",
  async (req, res, next) => {
    try {
      const { token } = req.cookies;
      console.log(req.cookies);
      if (verifyToken(token)) {
        console.log(token);
        console.log("im in veryfy token");
        next();
        return;
      }
      res.status(401).send("you are unothorized");
    } catch (error) {
      throw error;
    }
  },
  async (req, res) => {
    console.log(req.cookies);
    try {
      const response = await Product.create(req.body);
      res.json(response);
    } catch (error) {
      throw error;
    }
  }
);
app.listen(port, () => {
  console.log(`app listenin on port ${port}`);
});
