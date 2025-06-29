import dotenv from 'dotenv'
import { databaseConnection } from './db/connectDB.ts';
import path from 'path'
const envPath:(string) = path.resolve("/home/pumpum/coding/WeTalk/Backend/src","../.env")
dotenv.config({
    path:envPath,
})

databaseConnection()
.then(()=>{
    try {
        console.log("Database connected succesfully")
    } catch (error) {
        console.log(error)
    }
})
