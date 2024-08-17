import { Request, Response } from "express";
import { Chief } from "../../model/official.Chief";
import bcrypt from "bcryptjs";
import { Student } from "../../model/student.user";

export const getDean = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const deanId = req.params.id;
    const dean = await Student.findById(deanId);
    res.status(200).json({
      status: "success",
      dean,
    });
  } catch (err) {
    // General error response
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};
