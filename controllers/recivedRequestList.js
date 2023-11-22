
const {getDatabase}=require("../db_connect/mongooseConnect");
const recivedRequest = async(req,res,next)=>{
    try{
        const DB=getDatabase();
        const addFriends = DB.collection("addFriends");
     
        let logged_user_id=req.user.id;
        
        let result=await addFriends.find(
        {
           reciver_user_id:logged_user_id,friend_status:0
        }
        )  .toArray();
        if (result && result.length > 0) {
            console.log(result);
            const jsonResult = JSON.stringify(result);
            req.queryResult = jsonResult;
        }else{
            req.queryResult =null;
            req.message="Something went wrong";
        }
        return next();
        
    }
    catch(error){
       req.message="Something went wrong";
       return next();
    }
 
 
 }
 
module.exports={recivedRequest};
