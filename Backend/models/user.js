const mongoose  = require("mongoose");


userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email :{
    type : String,
    required :true,

    },
    password : {
        type : String,
        required :true, 
    },
    role :{
        type:String ,
        enum:['user', "doctor","patient"]
    } 
})
const User = mongoose.model('User', userSchema)
module.exports = User