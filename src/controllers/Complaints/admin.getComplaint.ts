import { Request, Response } from "express";
import Complaint from "../../model/official.complaint";
import { HOD } from "../../model/official.HOD";
import { Dean } from "../../model/official.deans";
import { Chief } from "../../model/official.Chief";

export const getComplaint = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const compId = req.params.id;
    const complaint = await Complaint.findById(compId)
      .populate({ path: "assignedTo", model: HOD })
      .populate({ path: "escalatedToDean", model: Dean })
      .populate({ path: "escalatedToChief", model: Chief })
      .exec();
    res.status(200).json({
      status: "success",
      complaint,
    });
  } catch (err) {
    // General error response
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};
