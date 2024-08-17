import { Request, Response } from "express";
import { Chief } from "../../model/official.Chief";
import bcrypt from "bcryptjs";
import { Student } from "../../model/student.user";

export const getStudents = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const students = await Student.find();
    res.status(200).json({
      status: "success",
      total: students.length,
      students,
    });
  } catch (err) {
    // General error response
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};
