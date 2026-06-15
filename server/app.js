import "dotenv/config";

import express from "express";
import cors from "cors";
import APIRoute from "./routes/api.route.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  }),
);

app.use(express.json());

app.use("/api", APIRoute);

const PORT = process.env.NODE_PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
