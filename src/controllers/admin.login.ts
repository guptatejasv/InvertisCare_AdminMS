import { Request, Response } from "express";
import { Admin } from "../model/official.admin";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const login = async (req: Request, res: Response) => {
  try {
    const { adminId, password } = req.body;
    if (!adminId || !password) {
      res.status(401).json({
        status: "fail",
        message: "Please enter Official Id and Password both..",
      });
    }
    const user = await Admin.findOne({ adminId: adminId }).select("+password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const secret = process.env.JWT_SECRET as string;

    const token = sign({ id: user._id }, secret, {
      expiresIn: "90d",
    });

    if (user && isMatch) {
      res.status(200).json({
        status: "success",
        token,
        message: "You are logged in successfully..!",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err || "An error occurred during registration.",
    });
  }
};
