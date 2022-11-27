const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "./about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "./contact-me.html"));
});

app.get("*", (req, res) => {
  res.send("The path does not exist, try again", 404);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
