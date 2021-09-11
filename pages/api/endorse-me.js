//POST api/endorse-me
import { MongoClient } from "mongodb";

const database_url = process.env.DATABBASE_URL;

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(database_url);

    const db = client.db();
    const myEndorsementDetailsCollection = db.collection(
      "myEndorsementDetails"
    );
    const result = await myEndorsementDetailsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Endorsement Record Inserted" });
  }
}

export default handler;
