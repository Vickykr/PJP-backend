const mongoose = require('mongoose');

const userRegisterSchema = new mongoose.Schema({
    firstname :{
        type:String,
        //required: true
    },
    lastname :{
        type:String,
        //required: true
    },
    gender:{
        type:String,
        //required: true
    },
    dob:{
        type:String,
        //required: true
    },
    email :{
        type:String,
        //required: true,
        //unique: true
    },
    password:{
        type:String,
        //required:true
    },
    phone:{
        type:Number,
        //required: true,
        //unique: true
    },
    yearsofexp:{
        type:Number,
        //required: true
    }
})

//collection creation
const User = new mongoose.model("user",userRegisterSchema);

module.exports = User;