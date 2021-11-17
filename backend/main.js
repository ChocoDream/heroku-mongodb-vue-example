const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const middleURL = "/api";
const { randomize } = require("./Random");

//MONGODB
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://admin:<password>@personalstuff.i38hd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const randomFacts = ["moo", "moooo", "I'm a dog bark bark", "bark", "baaaark"];

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.get(middleURL + "/fact", async (req, res) => {
  const client = new MongoClient(uri, {
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
