import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db";

// 게시글 생성 api (POST)
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    return await createPost(req, res);
  } else if (req.method === "GET") {
    return await readPost(req, res);
  } else {
    return res.status(405).json({ message: "Method not allowed", success: false });
  }
}

// prisma 게시글 생성
async function createPost(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

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

    return res.status(200).json({ boardId: body.boardId, postId: newPost.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error occurred", success: false });
  }
}

// Prisma 게시글 얻기 (GET - Read)
async function readPost(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  let post;

  try {
    if (id) {
      post = await prisma.post.findMany({
        where: {
          id: Number(id),
        },
        include: {
          comments: true,
        },
      });
    }

    return res.status(200).json({ posts: post, success: true });
  } catch (error) {
    res.status(500).json({ message: "error occurred", success: false });
  }
}
