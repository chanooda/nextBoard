import { prisma } from "../../db/index";
import { NextApiRequest, NextApiResponse } from "next";

// api/user -> 회원가입 api
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    return await checkDuplicateUser(req, res);
  } else {
    return res.status(405).json({ message: "Method not allowed", success: false });
  }
}

// 아이디 와 닉네임 중복 검사 함수
async function checkDuplicateUser(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  // username이 이미 존재하는지 검사
  const username = await prisma.user.findUnique({
    where: {
      username: body.username,
    },
  });
  // userId가 이미 존재하는지 검사
  const userId = await prisma.user.findUnique({
    where: {
      username: body.userId,
    },
  });

  // 중복 유무에 따라 에러 처리
  if (!username && !userId) {
    return await createUser(req, res);
  } else if (username) {
    res.status(500).json({ error: "Duplicate username", success: false });
  } else if (userId) {
    res.status(500).json({ error: "Duplicate user Id", success: false });
  }
}

// 유저 추가 함수 (POST)
async function createUser(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  try {
    //테이블에 유저 추가
    const newEntry = await prisma.user.create({
      data: {
        username: body.username,
        userId: body.userId,
        password: body.password,
      },
    });

    return res.status(200).json({ data: newEntry, success: false });
  } catch (error) {
    res.status(500).json({ error: "Error creating question", success: false });
  }
}
