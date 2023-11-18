/* making path to find user login model*/
const path=require("path");
const direname=path.join(__dirname,"../");
const toModel=path.join(direname,"/model/loginModel/")
const findFcm=require(`${toModel}`);
const getRegistrationTokensFromDatabase = async()=>{
    try{
        const query = { fcmToken: { $exists: true, $ne: null } };

        const result = await findFcm.find(query,{fcmToken:1,_id:0})
        if(result!=null){
            const fcmTokens = result.map((obj) => obj.fcmToken);
            return fcmTokens;
        }
       
    }
    catch(error){
        console.log(error);
    }
 
 
 }
 
module.exports={getRegistrationTokensFromDatabase};
