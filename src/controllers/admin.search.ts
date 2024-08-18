import { Request, Response } from "express";
import Complaint, { IComplaint } from "../model/official.complaint";
import { HOD, IHOD } from "../model/official.HOD";
import { Dean, IDean } from "../model/official.deans";
import { IAuth, Student } from "../model/student.user";

export const search = async (req: Request, res: Response) => {
  try {
    let complaintQuery: Record<string, unknown> = {};

    // Search for complaints
    if (
      req.query.complaintId ||
      req.query.status ||
      req.query.subject ||
      req.query.description
    ) {
      const { complaintId, status, subject, description } = req.query;
      if (complaintId) complaintQuery._id = complaintId;
      if (status) complaintQuery.status = { $regex: status, $options: "i" }; // Case-insensitive search
      if (subject) complaintQuery.subject = { $regex: subject, $options: "i" }; // Case-insensitive search
      if (description)
        complaintQuery.description = { $regex: description, $options: "i" }; // Case-insensitive search

      const complaints: IComplaint[] = await Complaint.find(complaintQuery);

      return res.status(200).json({
        status: "success",
        total: complaints.length,
        data: complaints,
      });
    }
    if (
      req.query.studentId ||
      req.query.name ||
      req.query.course ||
      req.query.year
    ) {
      const { studentId, name, course, year } = req.query;
      if (studentId) complaintQuery._id = studentId;
      if (name) complaintQuery.name = { $regex: name, $options: "i" }; // Case-insensitive search
      if (course) complaintQuery.course = { $regex: course, $options: "i" }; // Case-insensitive search
      if (year) complaintQuery.year = { $regex: year, $options: "i" }; // Case-insensitive search

      const students: IAuth[] = await Student.find(complaintQuery);

      return res.status(200).json({
        status: "success",
        total: students.length,
        data: students,
      });
    }
    if (req.query.hodName) {
      const { hodName } = req.query;

      if (hodName) complaintQuery.name = { $regex: hodName, $options: "i" }; // Case-insensitive search

      const hod: IHOD[] = await HOD.find(complaintQuery);

      return res.status(200).json({
        status: "success",
        total: hod.length,
        data: hod,
      });
    }
    if (req.query.deanName) {
      const { deanName } = req.query;

      if (deanName) complaintQuery.name = { $regex: deanName, $options: "i" }; // Case-insensitive search

      const dean: IDean[] = await Dean.find(complaintQuery);

      return res.status(200).json({
        status: "success",
        total: dean.length,
        data: dean,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
