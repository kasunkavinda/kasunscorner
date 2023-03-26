import { MongoClient, Db, Collection } from "mongodb";
import { SUCCESS } from "../../constants/constants";
import { ContactData } from "../../interfaces/interfaces";
import { NextApiRequest, NextApiResponse } from "next";
const database_url = process.env.DATABASE_URL;

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("contactCollection", req.method);
  if (req.method === "POST") {
    const data: ContactData = req.body;

    const client = await MongoClient.connect(database_url);
    console.log("data", data);
    const db: Db = client.db();
    const contactCollection: Collection<ContactData> =
      db.collection("contactMeMessages");

    const result = await contactCollection.insertOne(data);
    client.close();
    res.status(201).json({ code: SUCCESS, message: "Contact Record Inserted" });
  }
}

export default handler;
