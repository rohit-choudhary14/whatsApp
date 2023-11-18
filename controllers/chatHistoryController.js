/* making path to find user login model*/
const path=require("path");
const direname=path.join(__dirname,"../");
const toModel=path.join(direname,"/model/chatModel/");

const chatModel=require(`${toModel}`);
const chatHistoryController = async(req,res,next)=>{
    try{
        
        
            const {reciverId}=req.body;
            let senderId=req.user.id;
       
             if(senderId!=undefined && reciverId!=undefined){
               
               let SendData=await chatModel.find(
                {
                    $or: [
                        {senderId:senderId,reciverId:reciverId}
                       ,{senderId:reciverId,reciverId:senderId}
                    ]
                }
                
                ).sort({ time: 1 });
              
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
