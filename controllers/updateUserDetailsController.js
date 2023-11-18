/* making path to find user login model*/
const path=require("path");
const direname=path.join(__dirname,"../");
const toModel=path.join(direname,"/model/updateUserDetails/")

const updateUserDetails=require(`${toModel}`);
const updateUser = async(req,res,next)=>{
    try{
        
       
        let user_id=req.user.id;
        if(user_id!=undefined){
            let user_name=req.body.name;
            let about=null;
            if(req.body.about!=undefined){
                about=req.body.about;
            }
            console.log(user_name,user_id);
            await updateUserDetails.updateOne({_id:user_id},{ $set: { user_name: user_name,about:about}});
        }
        return next();
    }
    catch(error){
    //    console.log(error);
       return next();
    }
 
 
 }
 
module.exports={updateUser};
