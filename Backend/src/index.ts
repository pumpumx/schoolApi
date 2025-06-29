import dotenv from 'dotenv'
import { databaseConnection } from './db/connectDB.ts';
import path from 'path'
import { fileURLToPath } from 'url';
import { app } from './app.ts';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const envPath:(string) = path.resolve(__dirname , "../.env")
dotenv.config({
    path:envPath,
})

databaseConnection()
.then(()=>{
    try {
        console.log("Database connected succesfully")
        const appPort = process.env.APP_PORT
        app.listen(appPort, (err)=>{
            console.log("App listening at port " , appPort)
        })
    } catch (error) {
        console.log("Error while listening app",error)
    }
})
