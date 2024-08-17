import { Router } from "express";

import { login } from "../controllers/admin.login";
import { HodRegister } from "../controllers/facultyRegistration/hod.registratiion";
import { DeanRegister } from "../controllers/facultyRegistration/dean.registration";
import { verify_token } from "../helper/jwtVerify";
import { ChiefRegister } from "../controllers/facultyRegistration/chief.registration";
import { getComplaints } from "../controllers/Complaints/admin.getComplaints";
import { getComplaint } from "../controllers/Complaints/admin.getComplaint";
import { getStudents } from "../controllers/GetUser/admin.getStudents";
import { getStudent } from "../controllers/GetUser/admin.getStudent";
import { getHODs } from "../controllers/GetUser/admin.getHods";
import { getHOD } from "../controllers/GetUser/admin.getHod";
import { getDeans } from "../controllers/GetUser/admin.Deans";
import { getDean } from "../controllers/GetUser/admin.Dean";
import { updateHODProfile } from "../controllers/Profile/admin.updateHODProfile";
import { updateDeanProfile } from "../controllers/Profile/admin.updateDeanProfile";
import { updateChiefProfile } from "../controllers/Profile/admin.updateChiefProfile";

const router = Router();
router.post("/admin/secure/login", login);
router.post("/admin/secure/hodRegistration", verify_token, HodRegister);
router.post("/admin/secure/deanRegistration", verify_token, DeanRegister);
router.post("/admin/secure/chiefRegistration", verify_token, ChiefRegister);
router.get("/admin/secure/getComplaints", verify_token, getComplaints);
router.get("/admin/secure/getComplaint/:id", verify_token, getComplaint);

router.get("/admin/secure/getStudents", verify_token, getStudents);
router.get("/admin/secure/getStudent/:id", verify_token, getStudent);

router.get("/admin/secure/getHods", verify_token, getHODs);
router.get("/admin/secure/getHod/:id", verify_token, getHOD);
router.get("/admin/secure/getDeans", verify_token, getDeans);
router.get("/admin/secure/getDean/:id", verify_token, getDean);

router.patch(
  "/admin/secure/updateHODProfile/:id",
  verify_token,
  updateHODProfile
);
router.patch(
  "/admin/secure/updateDeanProfile/:id",
  verify_token,
  updateDeanProfile
);
router.patch(
  "/admin/secure/updateChiefProfile/:id",
  verify_token,
  updateChiefProfile
);

export default router;
