/* making path to find user login model*/
const path=require("path");
const direname=path.join(__dirname,"../");
const toModel=path.join(direname,"/model/updateUserDetails/")

const FetchUserDetails=require(`${toModel}`);
const FetchUser = async(req,res,next)=>{
    try{
        
        
        let user_id=req.user.id;
        if(user_id){
            const userData=await FetchUserDetails.findOne({_id:user_id});
            if(userData){
               req.userName=userData.user_name;
               req.userAbout=userData.about;
               req.profilePicture=userData.profilePicture
               return next();
            }else{
               return next();
            }
        }
        else{
            req.user=false;
            return next();
        }
        
    }
    catch(error){
       req.user=false;
       return next();
    }
 
 
 }
 
module.exports={FetchUser};
