const { getDatabase,ObjectId} = require("../db_connect/mongooseConnect");
const updateUser = async(req,res,next)=>{
    try{
        
        const DB = getDatabase();
        const updateUserDetails = DB.collection("logins");
        let user_id=req.user.id;
        if(user_id!=undefined){
            let user_name=req.body.name;
            let about=null;
            if(req.body.about!=undefined){
                about=req.body.about;
            }
            await updateUserDetails.updateOne({_id:new ObjectId(user_id)},{ $set: { user_name: user_name,about:about}});
        }
        return next();
    }
    catch(error){
       return next();
    }
 
 
 }
 
module.exports={updateUser};
