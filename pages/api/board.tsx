import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db";

// 게시판 생성 api (POST)
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    return await createBoard(req, res);
  } else if (req.method === "GET") {
    return await readBoard(req, res);
  } else {
    return res.status(405).json({ message: "Method not allowed", success: false });
  }
}

// prisma 게시판 생성 (POST - Create)
async function createBoard(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  const boardName = await prisma.board.findUnique({
    where: {
      name: body.boardName,
    },
  });
  try {
    if (!boardName) {
      await prisma.board.create({
        data: {
          name: body.boardName,
        },
      });
      return res.status(200).redirect("/");
    } else {
      res.status(500).json({ message: "중복된 이름입니다.", success: false });
    }

    //return res.status(200).json({ board, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error occurred", success: false });
  }
}

// Prisma 게시판 얻기 (GET - Read)
async function readBoard(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  let boards;

  try {
    if (id) {
      boards = await prisma.board.findMany({
        where: {
          id: Number(id),
        },
        include: {
          posts: true,
        },
      });
    } else {
      boards = await prisma.board.findMany({
        include: {
          posts: true,
        },
      });
    }

    return res.status(200).json({ boards: boards, success: true });
  } catch (error) {
    res.status(500).json({ message: "error occurred", success: false });
  }
}
