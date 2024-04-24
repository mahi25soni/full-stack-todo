const express = require("express")
require("dotenv").config() 
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")


const dbConnect = require("./config/mongoDb")
const taskRoute = require("./route/taskRoute")

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(cookieParser())

app.use("/api/task", taskRoute)
 
dbConnect()
app.listen( port, ()=> {
    console.log("The server is working!")
})