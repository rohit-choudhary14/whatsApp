/* making path to find user login model*/
const path=require("path");
const direname=path.join(__dirname,"../");
const toModel=path.join(direname,"/model/addFriendModel/");
const addFriend=require(`${toModel}`);
const accept_request = async(req,res,next)=>{
    try{
        
      
        let id=req.body.id;
       
        let result=await addFriend.updateOne(
            {_id:id},{ $set: { friend_status:1 }}
        )
        if(result){
            req.message="Friend request accepted";
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
 
module.exports={accept_request};
