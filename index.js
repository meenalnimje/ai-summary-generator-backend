const express = require("express");
const apiroute = require("./router/uploadRouter");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use("/api", apiroute);
app.listen(8000, (req, res) => {
  console.log("server start at post 8000");
});
