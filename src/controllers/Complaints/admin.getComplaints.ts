import { Request, Response } from "express";
import Complaint from "../../model/official.complaint";

export const getComplaints = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const complaints = await Complaint.find();
    res.status(200).json({
      status: "success",
      total: complaints.length,
      complaints,
    });
  } catch (err) {
    // General error response
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};
