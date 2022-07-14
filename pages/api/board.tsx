import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db";

// 게시판 생성 api (POST)
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    return await createBoard(req, res);
  } else {
    return res.status(405).json({ message: "Method not allowed", success: false });
  }
}

// prisma 게시판 생성
async function createBoard(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  try {
    const newBoard = await prisma.board.create({
      data: {
        name: body.name,
      },
    });

    return res.status(200).json({ data: newBoard, success: true });
  } catch (error) {
    res.status(500).json({ message: "error occurred", success: false });
  }
}
