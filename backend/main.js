const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const middleURL = "/api";

//MONGODB
const { MongoClient } = require("mongodb");
const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://admin:fx3VAXbWvRFuq1Cu@cluster0.i38hd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const dbName = "factsdb";

app.use(express.static(path.join(__dirname, "dist")));

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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
