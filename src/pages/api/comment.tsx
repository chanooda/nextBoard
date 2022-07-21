import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;

  if (method === "POST") {
    return await postComment(req, res);
  } else if (method === "DELETE") {
    return await deleteComment(req, res);
  } else if (method === "PUT") {
    return await updateComment(req, res);
  } else {
    return res.status(405).json({ message: "Method not allowed", success: false });
  }
}
// 댓글 생성 (POST - Create)
async function postComment(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  try {
    const comment = await prisma.comment.create({
      data: {
        content: body.content,
        password: body.password,
        guest: body.password ? true : false,
        postId: body.postId,
      },
    });
    console.log(body.postId);
    return res.status(200).json({ postId: body.postId, boardId: body.boardId });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "에러 발생", success: false });
  }
}

// 댓글 삭제 (DELETE - Delete)
async function deleteComment(req: NextApiRequest, res: NextApiResponse) {
  const { postId, boardId, commentId } = req.body;

  try {
    const post = await prisma.post.update({
      where: { id: postId },
      data: {
        comments: {
          delete: { id: commentId },
        },
      },
    });
    console.log(post);
    return res.status(200).json({ postId, boardId: post.boardId });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "에러 발생", success: false });
  }
}

// 댓글 수정 (PUT - Update)
async function updateComment(req: NextApiRequest, res: NextApiResponse) {
  const { content, commentId, postId } = req.body;

  try {
    const post = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        comments: {
          update: {
            where: {
              id: commentId,
            },
            data: {
              content: content,
            },
          },
        },
      },
    });

    return res.status(200).json({ boardId: post.boardId, postId });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "에러 발생", success: false });
  }
}
