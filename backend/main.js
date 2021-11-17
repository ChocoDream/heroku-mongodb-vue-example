const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const apimiddle = "/api";

const randomFacts = ["moo", "moooo", "I'm a dog bark bark", "bark", "baaaark"];

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/test.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
