//POST api/endorse-me
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://kasunkavinda:kasunkavinda123456@cluster0.oxj4i.mongodb.net/myPortfolio?retryWrites=true&w=majority"
    );

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
