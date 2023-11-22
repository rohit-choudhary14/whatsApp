
const {getDatabase}=require("../db_connect/mongooseConnect");
const accept_request = async(req,res,next)=>{
    try{
        
        const DB=getDatabase();
        const addFriends = DB.collection("addFriends");
        let id=req.body.mobile_number;
       
        let result=await addFriends.updateOne(
            {mobile_number:id},{ $set: { friend_status:1 }}
        )
        if(result){
            req.message="Friend request accepted";
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
 
module.exports={accept_request};
