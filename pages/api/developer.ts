// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "config/connectDB";
import Developer from "models/developer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    connectDB();
    const developers = await Developer.find();
    if (!developers) {
      return res.status(400).json({
        error: "No developers found",
      });
    }
    res.status(200).json({ success: true, data: developers });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
