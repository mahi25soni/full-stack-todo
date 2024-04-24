const express = require("express")
const router = express.Router()
// const {verifyToken } = require("../middlewares/authToken")

const {addTask, getEntireList, markComplete} = require("../controllers/taskController")




router.post("/create", addTask)
router.get("/", getEntireList)
router.put("/done/:_id", markComplete)




module.exports = router