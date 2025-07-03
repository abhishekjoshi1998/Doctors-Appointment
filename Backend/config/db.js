const { default: mongoose } = require("mongoose")

const connectToDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db is connected")
    } catch (error) {
        console.log("fail while connecting...")
    }
}
module.exports = connectToDb