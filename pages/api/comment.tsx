import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db";

// 댓글 생성 api (POST)
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    return await createComment(req, res);
  } else {
    return res.status(405).json({ message: "Method not allowed", success: false });
  }
}

// prisma 댓글 생성
async function createComment(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  try {
    // guest 인데 비밀번호가 없거나, 회원인데 회원 아이디가 없는 경우 에러
    if (!body.userId && !body.password) {
      return res.status(500).json({ message: "need password ", success: false });
    } else if (body.userId && body.password) {
      return res.status(500).json({ message: "It's wrong comment.", success: false });
    }

    console.log(body);

    const newComment = await prisma.comment.create({
      data: {
        content: body.content,
        postId: body.postId,
        userId: body.userId,
        password: body.password,
        guest: body.userId ? false : true,
      },
    });

    return res.status(200).json({ data: newComment, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error occurred", success: false });
  }
}
