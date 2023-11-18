/* making path to find user login model*/
const path=require("path");
const direname=path.join(__dirname,"../");
const toModel=path.join(direname,"/model/addFriendModel/");
const toModelWithLogin=path.join(direname,"/model/updateUserDetails/")
const FetchUserDetails=require(`${toModelWithLogin}`);
const addFriend=require(`${toModel}`);
const activeFriendList = async(req,res,next)=>{
    try{
        
        // find logged user details
        let logged_user_id=req.user.id;
        let logged_user_details=await FetchUserDetails.find({_id:logged_user_id});
        let logged_user_mobile=logged_user_details[0].mobile_number;
        let result=await addFriend.find(
        {
            $or: [
                { sender_mobile_number: logged_user_mobile, friend_status: 1 },
                { reciver_mobile_number: logged_user_mobile, friend_status: 1 }
              ]
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
module.exports={activeFriendList};
