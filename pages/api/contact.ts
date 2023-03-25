//POST api/contact-me
import { MongoClient } from "mongodb";

const database_url = process.env.DATABASE_URL;

async function handler(req, res) {
  console.log("contactCollection", req.method);
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(database_url);
    console.log("data", data);
    const db = client.db();
    const contactCollection = db.collection("ContactMe");

    const result = await contactCollection.insertOne(data);
    console.log("inside handler");
    client.close();
    res
      .status(201)
      .json({ code: "SUCCESS", message: "Contact Record Inserted" });
  }
}

export default handler;
