import { Request, Response } from "express";

import { Chief } from "../../model/official.Chief";
export const updateChiefProfile = async (req: Request, res: Response) => {
  try {
    const chiefId = req.params.id;
    const { email, officialId } = req.body;
    const chief = await Chief.findByIdAndUpdate(
      chiefId,
      {
        email,
        ChiefId: officialId,
      },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      message: "Chief Profile updated Successfully",
      chief,
    });
  } catch (err) {
    // General error response
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};
