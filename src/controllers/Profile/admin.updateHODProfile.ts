import { Request, Response } from "express";
import { HOD } from "../../model/official.HOD";
export const updateHODProfile = async (req: Request, res: Response) => {
  try {
    const hodId = req.params.id;
    const { email, officialId } = req.body;
    const hod = await HOD.findByIdAndUpdate(
      hodId,
      {
        email,
        HODId: officialId,
      },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      message: "HOD Profile updated Successfully",
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
