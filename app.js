const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const db = require("./models/index");
const port = process.env.PORT;
const api = "/api/v1";

const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(`${api}/users`, userRoutes);

const corsOrigin = {
  origin: "*",
};
app.use(cors(corsOrigin));
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Start working on your project champ!!" });
});
app.listen(port, () => console.log(`server running on port ${port}`));
