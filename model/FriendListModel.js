const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    user_name:{
        type:String,
        required:true,
        unique: true
       
    },
    friends_id:{
        type:String,
        required:true,
    },
    mobile_number:{
        type:String,
        required:true,
        unique: true
    },
   
})
const Loginmodel=new mongoose.model("login",schema);
module.exports=Loginmodel;