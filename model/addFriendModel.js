const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    sender_want_to_add_fname:{
        type:String,
        required:true 
    },
    sender_want_to_add_lname:{
        type:String,
        required:true
        
    },
    sender_user_name:{
        type:String,
        required:true,
    },
    sender_id:{
        type:String,
        required:true,
    },
    sender_mobile_number:{
        type:String,
        required:true, 
    },
    reciver_user_id:{
        type:String,
        required:true
    },
    reciver_user_name:{
        type:String,
        required:true,
    },
    reciver_mobile_number:{
        type:String,
        required:true,
    },
    friend_status:{
        type:Number,
        default:0
    },
    sprofilePicture:{
        type:Number,
        default:0
    },
    rprofilePicture:{
        type:Number,
        default:0
    }
    
})
const addFriend=new mongoose.model("addFriends",schema);
module.exports=addFriend;