const { getDatabase,ObjectId } = require("../db_connect/mongooseConnect");
const updateProfile = async(req,res,next)=>{
    try{
        
        const DB = getDatabase();
        const updateUserDetails = DB.collection("logins");
        let user_id=req.user.id;
        if(user_id!=undefined){
            const profilePicture=user_id+".jpg";
            await updateUserDetails.updateOne({_id:new ObjectId(user_id)},{ $set: { profilePicture}});
        }
        return next();
    }
    catch(error){
       return next();
    }
 
 
 }
 
module.exports={updateProfile};
