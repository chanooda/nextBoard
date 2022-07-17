import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db";

// 게시글 생성 api
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    return await createPost(req, res);
  } else if (req.method === "PUT") {
    return await updatePost(req, res);
  } else if (req.method === "DELETE") {
    return await deletePost(req, res);
  } else if (req.method === "GET") {
    return await readPost(req, res);
  } else {
    return res.status(405).json({ message: "Method not allowed", success: false });
  }
}

// prisma 게시글 생성 (POST - Create)
async function createPost(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  try {
    if (body.userId && body.password) {
      return res.status(500).json({ message: "잘못된 접근입니다.", success: false });
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

// Prisma 게시글 수정 (PUT - Update)
async function updatePost(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    const postPassword = await prisma.post.findFirst({
      where: {
        id: body.postId,
      },
    });

    if (postPassword?.password !== body.password) {
      return res.status(500).json({ message: "비밀번호가 틀립니다.", success: false });
    }
    const updatePost = await prisma.post.update({
      where: {
        id: body.postId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return res.status(200).json({ boardId: body.boardId, postId: body.postId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error occurred", success: false });
  }
}

// Prisma 게시글 삭제 (DELETE - delete)
async function deletePost(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { password } = req.body;

  try {
    const postPassword = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (postPassword?.password !== password) {
      return res.status(500).json({ message: "비밀번호가 틀립니다.", success: false });
    } else {
      const deletePost = await prisma.post.delete({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json({ boardId: deletePost.boardId });
    }
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
