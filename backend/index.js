const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbconnection");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { generateURL, redirect } = require("./urlController");
const  path = require('path');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/generateUrl", generateURL);
app.get("/:id", redirect);


const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server started at port number: ${port}`));
