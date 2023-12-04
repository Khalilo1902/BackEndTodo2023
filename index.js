import express, { json } from "express"
import DbConnected from "./Config/dbConnect.js"
import taskRouter from "../BackEndTodo2023/router/taskRouter.js"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()





DbConnected()

const app = express()


app.use(express.json())
app.use(cors())
app.use(taskRouter)

const PORT = process.env.PORT || 5006

app.listen(PORT,console.log(`Service is Running an PORT ${PORT}`))