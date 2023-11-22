const { getDatabase } = require("../db_connect/mongooseConnect");
const chatController = async(req,res,next)=>{
    try{
            const DB = getDatabase();
            const chatModel = DB.collection("chats");
            const sClassName= req.body.sClassName;
            const rClassName=  req.body.rClassName;
            const reciverId= req.body.reciverId;
            const message= req.body.message;
            const newFileName=req.newFileName;

            let senderId=req.user.id;
             if(senderId!=undefined && reciverId!=undefined && message!=undefined && sClassName!=undefined &&  rClassName!=undefined){
                    const time = new Date();
                    const options = {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    };
                    const timeOfMessage = new Intl.DateTimeFormat('en-US', options).format(time);
                    const body={sClassName,rClassName,message,senderId,reciverId,timeOfMessage,time,newFileName};
                    let data=await chatModel.insertOne(body);
                    
                    if(data){
                        req.message="Message sent successfully";
                        req.successcode=true;
                    }
                }
                else{
                    req.message="Something went wrong";
                    req.successcode=false;
                
                }
                return next();
    }
    catch(error){
        console.log(error);
        req.message="Something went wrong";
        req.successcode=false;
        return next();
       
    }
 
 
 }
 
module.exports={chatController};
