const mongoose = require("mongoose")
require("dotenv").config()

const dbConnect = () => {
    mongoose.connect(process.env.LOCAL_MONGO_URL)
    .then(() => {
        console.log("Connected to the database")
    })
    .catch((error) => {
        console.log("Error in connecting to database")
        console.log(error.message)
        process.exit(1)
    })
}

module.exports = dbConnect;