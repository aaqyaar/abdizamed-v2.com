// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "config/connectDB";
import Developer from "models/developer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();
  try {
    const developers = await Developer.find();
    if (!developers.length) {
      return res.status(400).json({
        error: "No developers found",
        statusCode: 400,
      });
    }
    res.status(200).json({ success: true, data: developers, statusCode: 200 });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
