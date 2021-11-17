const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const middleURL = "/api";

//MONGODB
const { MongoClient } = require("mongodb");
const { text } = require("express");
const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://admin:fx3VAXbWvRFuq1Cu@cluster0.i38hd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const dbName = "factsdb";

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.get(middleURL + "/fact", async (req, res) => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    const db = client.db(dbName);
    const coll = db.collection("facts");
    const document = await coll
      .aggregate([
        {
          $sample: {
            size: 1,
          },
        },
      ])
      .toArray();
    res.send(document[0]);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
});

app.post(middleURL + "/fact", async (req, res) => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    const request = await req;
    if (!request.body || !request.body.text || request.body.text.length === 0)
      throw "Empty body";
    await client.connect();
    const { text, author } = req.body;
    const body = { text, author: author ?? "Unknown" };
    const db = client.db(dbName);
    const coll = db.collection("facts");
    await coll.insertOne(body);
    res.status(301).send({ status: "success", info: body });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ status: "failure", info: error });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
