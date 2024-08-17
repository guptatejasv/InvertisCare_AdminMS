import { Request, Response } from "express";
import { Chief } from "../../model/official.Chief";
import bcrypt from "bcryptjs";
import { Student } from "../../model/student.user";

export const getStudent = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const studId = req.params.id;
    const student = await Student.findById(studId);
    res.status(200).json({
      status: "success",
      student,
    });
  } catch (err) {
    // General error response
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};
