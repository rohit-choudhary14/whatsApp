/* making path to find user login model*/
const path=require("path");
const direname=path.join(__dirname,"../");
const toModel=path.join(direname,"/model/updateUserDetails/")

const updateUserDetails=require(`${toModel}`);
const updateProfile = async(req,res,next)=>{
    try{
        
       
        let user_id=req.user.id;
        if(user_id!=undefined){
            const profilePicture=user_id+".jpg";
            await updateUserDetails.updateOne({_id:user_id},{ $set: { profilePicture}});
        }
        return next();
    }
    catch(error){
       return next();
    }
 
 
 }
 
module.exports={updateProfile};
