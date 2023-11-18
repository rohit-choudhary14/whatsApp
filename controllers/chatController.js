/* making path to find user login model*/
const path=require("path");
const direname=path.join(__dirname,"../");
const toModel=path.join(direname,"/model/chatModel/");

const chatModel=require(`${toModel}`);
const chatController = async(req,res,next)=>{
    try{
        
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
                    let data=new chatModel(body);
                    let result=await data.save();
                    if(result){
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
