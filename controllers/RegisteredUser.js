const path=require("path");
const direname=path.join(__dirname,"../");
const toModel=path.join(direname,"/model/loginModel/")
const userLogin=require(`${toModel}`);
const {registerAuth}=require("../AuthUsers/RegisterAuth");
const read = async(req,res,next)=>{
    let mobile_number=req.body.mobile_number;
    let readData=await userLogin.findOne({mobile_number:mobile_number});
    if(readData){
       let data= registerAuth(readData,res);
       res.end();
        

    }else{
      return next();
    }


}
module.exports={read};