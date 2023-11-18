/* making path to find user login model*/
const path=require("path");
const direname=path.join(__dirname,"../");
const toModel=path.join(direname,"/model/loginModel/")

const updateUserDetails=require(`${toModel}`);
const storeFcmToken = async(req,res,next)=>{
    try{
        const { token } = req.body;
        let user_id=req.user.id;
        let result=await updateUserDetails.updateOne({_id:user_id},{ $set:{fcmToken: token}});
        return next();
    }
    catch(error){
        console.error(error);
        return next();
       
    }
 
 
 }
 
module.exports={storeFcmToken};
