
const {getDatabase}=require("../db_connect/mongooseConnect");
const FetchUser = async(req,res,next)=>{
    try{

        let user_id=req.user.mobile_number;
        if(user_id){
            const DB=getDatabase();
            const FetchUserDetails = DB.collection("logins");
            const userData=await FetchUserDetails.findOne({mobile_number:user_id});
            if(userData){
               req.userName=userData.user_name;
               req.userAbout=userData.about;
               req.profilePicture=userData.profilePicture
            }
        }
        else{
            req.user=false;  
        }
        return next();
    }
    catch(error){
       req.user=false;
       return next();
    }
 }
 
module.exports={FetchUser};
