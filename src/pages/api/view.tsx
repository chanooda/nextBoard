import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PUT") {
    return await putView(req, res);
  }
}

async function putView(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    const updateView = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        view: {
          increment: 1,
        },
      },
    });

    return res.status(200).json({ message: "성공", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "접근 실패", success: false });
  }
}
