const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const middleURL = "/api";
const { randomize } = require("./Random");

const randomFacts = ["moo", "moooo", "I'm a dog bark bark", "bark", "baaaark"];

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.get(middleURL + "/fact", (req, res) => {
  res.send(randomize(randomFacts));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
