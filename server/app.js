import "dotenv/config";

import express from "express";
import cors from "cors";
import APIRoute from "./routes/api.route.js";
import path from "path";
import { fileURLToPath } from "url";
import staticSiteFallBack from "./routes/staticSiteFallBack.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  }),
);


app.use(express.json());

app.use("/api", APIRoute);

app.use(staticSiteFallBackRoute);

const PORT = process.env.NODE_PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
