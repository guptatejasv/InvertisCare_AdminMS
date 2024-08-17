import { Request, Response } from "express";
import { Chief } from "../../model/official.Chief";
import bcrypt from "bcryptjs";

import { HOD } from "../../model/official.HOD";

export const getHODs = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const hods = await HOD.find();
    res.status(200).json({
      status: "success",
      total: hods.length,
      hods,
    });
  } catch (err) {
    // General error response
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};
