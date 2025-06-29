import {Document} from "mongoose";

export interface userSchemaType extends Document{
    username:string,
    email:string,
    password:string, 
    refreshToken:string,
    generateAccessToken():string,
    generateRefreshToken():string
}