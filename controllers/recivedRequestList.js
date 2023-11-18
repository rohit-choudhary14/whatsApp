/* making path to find user login model*/
const path=require("path");
const direname=path.join(__dirname,"../");
const toModel=path.join(direname,"/model/addFriendModel/");
const addFriend=require(`${toModel}`);
const recivedRequest = async(req,res,next)=>{
    try{
        
        // find logged user details
        let logged_user_id=req.user.id;
        
        let result=await addFriend.find(
        {
           reciver_user_id:logged_user_id,friend_status:0
        }
        ,{
            sender_user_name: 1,reciver_user_id:1,friend_status:1,_id:1
        }
        )
        if(result){
            const jsonResult = JSON.stringify(result);
            req.queryResult = jsonResult;
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
 
module.exports={recivedRequest};
