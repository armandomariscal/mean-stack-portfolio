require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const profileRoutes = require("./infrastructure/routes/profile.routes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB via .env!"));

app.use("/api/cv", profileRoutes);

app.listen(process.env.PORT, () => {
  console.log(`API running on port ${process.env.PORT}`);
});
