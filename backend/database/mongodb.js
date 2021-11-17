const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://admin:<password>@personalstuff.i38hd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});
module.exports = class mongodb {};
