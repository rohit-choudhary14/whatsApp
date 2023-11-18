/* making path to find user login model*/
const path=require("path");
const direname=path.join(__dirname,"../");
const toModel=path.join(direname,"/model/addFriendModel/");;
const addFriend=require(`${toModel}`);
const removeFreinds = async(req,res,next)=>{
    try{
        
      
        let sender_mobile_number=req.body.sender_mobile_number;
        let reciver_id=req.body.reciver_id;
        // console.log(sender_mobile_number,reciver_id)
        let result=await addFriend.deleteOne(
            {sender_mobile_number},
            {reciver_id}
        
        )
        if(result){
            req.message="Successfully remove...";
        }else{
            req.message="Something went wrong";
        }
        return next();
        
    }
    catch(error){
       req.message="Something went wrong";
       return next();
    }
 
 
 }
 
module.exports={removeFreinds};
