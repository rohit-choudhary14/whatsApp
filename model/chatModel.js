const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    sClassName:{
        type:String,
        required:true 
    },
    rClassName:{
        type:String,
        required:true 
    },
    message:{
        type:String,
        required:false,
        
    },
    senderId:{
        type:String,
        required:true,
    },
    reciverId:{
        type:String,
        required:true,
    },
    timeOfMessage:{
        type:String,
        required:true, 
    },
    time:{
        type:Date,
    },
    newFileName:{
        type:String,
        required:false,
        default:null
    }
   
   
    
    
})
const chatModel=new mongoose.model("chats",schema);
module.exports=chatModel;