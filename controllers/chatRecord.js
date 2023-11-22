const { getDatabase,ObjectId} = require("../db_connect/mongooseConnect");
const chatRecord = async(req,res,next)=>{
    try{
        const DB = getDatabase();
        const addFriends = DB.collection("addFriends");
        const FetchUserDetails = DB.collection("logins");
        // find logged user details
        let logged_user_id=req.user.id;
        let X_user_id=req.params.id;
        let result=await addFriends.findOne
        (
          {sender_id: logged_user_id, reciver_user_id:X_user_id,friend_status: 1}
        )
        const userData=await FetchUserDetails.findOne({_id:new ObjectId(X_user_id)});
                
        if(result!=null){
            let friendFullName=result.sender_want_to_add_fname+result.sender_want_to_add_lname;
            req.X_user = friendFullName;
            req.profilePicture=userData.profilePicture
            req.userMobile=userData.mobile_number;
           
        }else{
            let result=await addFriends.findOne
            (
              {sender_id: X_user_id, reciver_user_id:logged_user_id,friend_status: 1}
            )
            
            if(result){
               
                let friendFullName=result.sender_user_name;
               
                req.X_user = friendFullName;
                req.profilePicture=userData.profilePicture;
                req.userMobile=userData.mobile_number;
            }else{
                req.message="Something went wrong";
            }

        }
        return next();
        
    }
    catch(error){
       req.message="Something went wrong";
       return next();
    }
 } 
module.exports={chatRecord};
