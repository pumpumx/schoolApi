import type {  Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { AsyncHandler } from "../utils/AsyncHandler";

interface customRequest extends Request{
    user?:any
}


const addSchool = AsyncHandler(async(req:Request , res:Response)=>{
    const {schoolName , address , longitude  , latitude} = req.body
    const user = req.user
})