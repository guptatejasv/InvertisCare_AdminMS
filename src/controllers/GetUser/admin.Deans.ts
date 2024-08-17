import { Request, Response } from "express";
import { Chief } from "../../model/official.Chief";
import bcrypt from "bcryptjs";
import { Dean } from "../../model/official.deans";
export const getDeans = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const deans = await Dean.find();
    res.status(200).json({
      status: "success",
      total: deans.length,
      deans,
    });
  } catch (err) {
    // General error response
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};
