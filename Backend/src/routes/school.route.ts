import { Router } from "express";
import verifyJWT from "../middlewares/verifyJwt";
import { getSchoolData, insertSchoolData } from "../controllers/school.controller";


const schoolRouter = Router()


schoolRouter.route('/addSchool').post(verifyJWT , insertSchoolData)
schoolRouter.route('/listSchools').get(verifyJWT, getSchoolData)


export default schoolRouter