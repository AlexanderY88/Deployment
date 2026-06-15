import express from "express";

const route = express.Router();

// // Serve static  files from the frontend build directory
// app.use(express.static(path.resolve(process.cwd(), "./dist")));

const DIST_DIRECTORY = path.resolve(process.cwd(), "./dist");

app.use(express.static(DIST_DIRECTORY));

// Catch-all route to serve index.html for any request that doesn't match an API route
app.get((req, res) => {
  res.sendFile(DIST_DIRECTORY, "./index.html");
});