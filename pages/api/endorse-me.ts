import prisma from "../../prisma";
import type { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const post = await prisma.post.create({
      data: {
        name: data.name,
        job: data.job,
        feedback: data.feedback,
        gitlink: data.gitlink,
      },
    });

    return res.status(200).json(post);
  } else if (req.method === "GET") {
    const posts = await prisma.post.findMany();

    return res.status(200).json(posts);
  }
};

export default handler;
