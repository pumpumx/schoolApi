import type { Request, Response } from "express";
import { ApiError } from "../utils/ApiError.ts";
import { ApiResponse } from "../utils/ApiResponse.ts";
import { AsyncHandler } from "../utils/AsyncHandler.ts";
import { type schoolInput } from "../types/school.type.ts";
import School from "../models/school.model.ts";


interface customRequest extends Request {
    user?: any
}


const insertSchoolData = AsyncHandler(async (req: customRequest, res: Response) => {
    const { schoolName, address , longitude , latitude }: schoolInput = req.body
    const user = req.user;
    console.log(req.body)
    if (!user) throw new ApiError(500, false, "Invalid User");

    if ([schoolName, address , longitude , latitude].some((val) => val.toString().trim() === '')) {
        throw new ApiError(500, false, "All fields are required");
    }

    const location = {
        type:"Point",
        coordinates:[longitude,latitude]
    }

    const SchoolData = new School({
        schoolName,
        address,
        location
    })

    SchoolData.save()

    return res.status(200)
    .json(
        new ApiResponse(200 , "School data added successfuly",SchoolData)
    )
})

const getSchoolData = AsyncHandler(async(req:customRequest , res:Response)=>{
    const user = req.user

    if(!user) throw new ApiError(500 ,false, "Invalid User");


    const {longitude,latitude} = req.body

    if(!longitude || !latitude) throw new ApiError(500 , false ,"Location not provided");

    const userCoordinates = [longitude , latitude]

    const schoolDetails = await School.find({
        location:{
            $near:{
                $geometry:{
                    type:'Point',
                    coordinates:userCoordinates,
                },
                distanceField:"distance",
                $maxDistance: 50000,
            }
        }
    }).select("schoolName address")

    if(!schoolDetails) throw new ApiError(500 , false , "Error fetching schoolDetails ")
    
    return res
    .status(200)
    .json(
        new ApiResponse(200,"School details fetched successfully",{schoolDetails})
    )
})

export {
    insertSchoolData,
    getSchoolData
}