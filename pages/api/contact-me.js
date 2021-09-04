//POST api/contact-me
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://kasunkavinda:kasunkavinda123456@cluster0.oxj4i.mongodb.net/myPortfolio?retryWrites=true&w=majority"
    );

    const db = client.db();
    const contactCollection = db.collection("myPortfolio");
    const result = await contactCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Contact Record Inserted" });
  }
}

export default handler;
