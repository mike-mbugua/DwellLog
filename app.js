const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const db = require("./models/index");
const port = process.env.PORT;

app.use(express.json());

const corsOrigin = {
  origin: "*",
};
app.use(cors(corsOrigin));
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Start working on your project champ!!" });
});
app.listen(port, () => console.log(`server running on port ${port}`));
