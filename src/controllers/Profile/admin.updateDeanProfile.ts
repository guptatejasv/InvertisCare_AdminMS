import { Request, Response } from "express";
import { Dean } from "../../model/official.deans";
export const updateDeanProfile = async (req: Request, res: Response) => {
  try {
    const deanId = req.params.id;
    const { email, officialId } = req.body;
    const dean = await Dean.findByIdAndUpdate(
      deanId,
      {
        email,
        DeanId: officialId,
      },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      message: "Dean Profile updated Successfully",
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
