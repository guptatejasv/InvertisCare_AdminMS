import { Request, Response } from "express";
import { Admin } from "../model/official.admin";
import bcrypt from "bcryptjs";

export const adminRegister = async (req: Request, res: Response) => {
  try {
    const { adminId, email, password, phone } = req.body;

    // Validate input
    if (!adminId || !email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please fill all required fields.",
      });
    }

    // Validate officaialId length
    if (adminId.length < 10 || adminId.length > 14) {
      return res.status(400).json({
        status: "fail",
        message: "Officail ID must be between 10 and 14 characters long.",
      });
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await Admin.create({
      adminId,
      email,
      password: hashedPassword,
      phone,
    });

    res.status(201).json({
      status: "success",
      message: "User created successfully.",
      data: {
        user,
      },
    });
  } catch (err) {
    // General error response
    res.status(500).json({
      status: "fail",
      message: err || "Error: An error occurred during registration.",
    });
  }
};
