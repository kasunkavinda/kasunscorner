//POST api/contact-me
import { MongoClient } from "mongodb";

const database_url = process.env.DATABBASE_URL;

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(database_url);

    const db = client.db();
    const contactCollection = db.collection("ContactMe");
    const result = await contactCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "Contact Record Inserted" });
  }
}

export default handler;
