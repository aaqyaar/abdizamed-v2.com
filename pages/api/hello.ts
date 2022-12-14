// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "config/connectDB";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({ success: true, data: "Hello World" });
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
}
