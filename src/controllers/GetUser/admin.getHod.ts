import { Request, Response } from "express";
import { Chief } from "../../model/official.Chief";
import bcrypt from "bcryptjs";
import { Student } from "../../model/student.user";

export const getHOD = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const hodId = req.params.id;
    const hod = await Student.findById(hodId);
    res.status(200).json({
      status: "success",
      hod,
    });
  } catch (err) {
    // General error response
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};
