/* making path to find user login model*/
const path=require("path");
const direname=path.join(__dirname,"../");
const toModel=path.join(direname,"/model/addFriendModel/");
const toModelWithLogin=path.join(direname,"/model/updateUserDetails/")
const FetchUserDetails=require(`${toModelWithLogin}`);
const addFriend=require(`${toModel}`);
const findFreinds = async(req,res,next)=>{
    try{
        
        // find logged user details
        let logged_user_id=req.user.id;
        let logged_user_details=await FetchUserDetails.find({_id:logged_user_id});
        let logged_user_mobile=logged_user_details[0].mobile_number;
        console.log(logged_user_mobile);
        let result=await addFriend.find(
        {
           sender_mobile_number:logged_user_mobile,friend_status:0
        }
        ,{
            sender_user_name: 1,reciver_user_id:1,friend_status:1,sender_mobile_number:1,reciver_user_name:1,reciver_mobile_number:1
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
 
module.exports={findFreinds};
