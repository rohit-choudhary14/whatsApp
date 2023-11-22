/* making path to find user login model*/
const path=require("path");
const direname=path.join(__dirname,"../");
const toModel=path.join(direname,"/model/loginModel/")
const {registerAuth}=require("../AuthUsers/RegisterAuth");
const userLogin=require(`${toModel}`);
const { MongoClient } = require("mongodb");
const {getDatabase}=require("../db_connect/mongooseConnect");
const registerUser = async(req,res,next)=>{
    try{
        
        let country_code=req.body.country_id;
        let mobile_number=req.body.mobile_number;
        let user_name=mobile_number;
        const body={user_name,'country_id':country_code,'mobile_number':mobile_number,about:null,fcmToken:null,profilePicture:null};
        const DB=getDatabase();
        const login = DB.collection("logins");
        const userData=await login.insertOne(body);
        if(userData){
            registerAuth(userData,res);
            res.end();
        }else{
            res.end();
        }
    }
    catch(error){
       console.log(error);
        res.end();
    }
 
 
 }
 
module.exports={registerUser};
