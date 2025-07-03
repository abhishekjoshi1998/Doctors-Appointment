const express = require("express")
const connectToDb = require("./config/db")


const app = express()
app.use(express.json())
const PORT = 3000

app.listen(PORT, ()=>{
    connectToDb()
    console.log("server is working")
})