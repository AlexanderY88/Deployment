import express from "express";

const route = express.Router();

app.get("/api/foo", (req, res) => {
  res.json("hello from backend");
});

app.use("/api", (req, res) => {
  res.json({ message: "hello from api" });
});

export default route;