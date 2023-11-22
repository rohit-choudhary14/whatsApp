const { getDatabase } = require("../db_connect/mongooseConnect");
const chatHistoryController = async(req,res,next)=>{
    try{
        
        
            const DB = getDatabase();
            const chatModel = DB.collection("chats");
            const {reciverId}=req.body;
            let senderId=req.user.id;
            if(senderId!=undefined && reciverId!=undefined){
               
               let SendData=await chatModel.find(
                {
                    $or:[
                        {senderId:senderId,reciverId:reciverId}
                       ,{senderId:reciverId,reciverId:senderId}
                    ]
                }).sort({ time: 1 }).toArray();
               req.queryData=SendData; 
            }
            else{
                req.message="Something went wrong";
            }
            return next();
    }
    catch(error){
        console.log(error);
        req.message="Something went wrong";
        return next();  
    } 
 }
 
module.exports={chatHistoryController};
