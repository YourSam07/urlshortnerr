const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbconnection");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { generateURL, redirect } = require("./urlController");
const path = require("path");
const corsOptions = require("./config/corsOptions.js")

connectDB();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/generateUrl", generateURL);
app.get("/:id", redirect);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("frontend", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server started at port number: ${port}`));
