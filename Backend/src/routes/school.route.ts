import { Router } from "express";
import verifyJWT from "../middlewares/verifyJwt.ts";
import { getSchoolData, insertSchoolData } from "../controllers/school.controller.ts";


const schoolRouter = Router()


schoolRouter.route('/addSchool').post(verifyJWT , insertSchoolData)
schoolRouter.route('/listSchools').get(verifyJWT, getSchoolData)


export default schoolRouter