import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db";

// 게시글 생성 api (POST)
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    return await createPost(req, res);
  } else {
    return res.status(405).json({ message: "Method not allowed", success: false });
  }
}

// prisma 게시글 생성
async function createPost(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  console.log(body);

  try {
    // guest 인데 게시글에 비밀번호가 없으면 error 처리
    if (!body.userId && !body.password) {
      return res.status(500).json({ message: "need password ", success: false });
    } else if (body.userId && body.password) {
      return res.status(500).json({ message: "It's wrong post.", success: false });
    }
    //userId 가 없으면 (회원글이 아니면) quest에 true
    const newPost = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        password: body.password,
        userId: body.userId,
        boardId: body.boardId,
        guest: body.userId ? false : true,
      },
    });

    return res.status(200).json({ data: newPost, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error occurred", success: false });
  }
}
