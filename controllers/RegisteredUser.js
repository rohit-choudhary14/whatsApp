
const {getDatabase}=require("../db_connect/mongooseConnect");
const {registerAuth}=require("../AuthUsers/RegisterAuth");
const read = async(req,res,next)=>{
    let mobile_number=req.body.mobile_number;
    const DB=getDatabase();
    const collection = DB.collection("logins");
    let readData=await collection.findOne({mobile_number:mobile_number});
    if(readData){
      console.log(readData);
       let data= registerAuth(readData,res);
       res.end();
        

    }else{
      // console.log(readData);
      next();
    }


}
module.exports={read};