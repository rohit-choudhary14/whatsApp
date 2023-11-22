const {getDatabase}=require("../db_connect/mongooseConnect");
const addFriendToList = async(req,res,next)=>{
    try{
        
        const DB=getDatabase();
        const addFriends = DB.collection("addFriends");
        const FetchUserDetails = DB.collection("logins");
        let sender_want_to_add_fname=req.body[0][1];
        let sender_want_to_add_lname=req.body[1][1];
        let reciver_mobile_number=req.body[2][1];
        
        let sender_id=req.user.id;
        let sender_data=await FetchUserDetails.findOne({mobile_number:req.user.mobile_number});
        let sprofilePicture=0;
        if(sender_data.profilePicture!=null &&sender_data.profilePicture!=undefined ){
            sprofilePicture=1;
        }
        if(sender_data && sender_want_to_add_fname!=undefined && sender_want_to_add_lname!=undefined && reciver_mobile_number!=undefined){
            let reciver_data=await FetchUserDetails.findOne({mobile_number:reciver_mobile_number});
            
            if(reciver_data){
                let reciver_user_id=reciver_data._id.toString();
                let reciver_user_name=reciver_data.user_name;
                let sender_mobile_number=sender_data.mobile_number;
                let rprofilePicture=0;
                const friend_status=0;
                if(reciver_data.profilePicture!=null &&reciver_data.profilePicture!=undefined ){
                    rprofilePicture=1;
                }
                if(sender_mobile_number!=reciver_mobile_number){
                    // let check before adding
                    let check_data=await addFriends.find({

                        $or: [
                            { sender_id:sender_id,reciver_user_id:reciver_user_id},
                            {  sender_id:reciver_user_id,reciver_user_id:sender_id }
                          ]

                    }).count();
                   
                    if(check_data==1){
                        req.message="We can't add this number either you alredy sent request or you have been alredy recived a request..."; 
                    }else{
                        let sender_user_name=sender_data.user_name;
                        const body={sender_want_to_add_fname,sender_want_to_add_lname,sender_user_name,sender_id,sender_mobile_number,reciver_user_id,reciver_user_name,reciver_mobile_number,sprofilePicture,rprofilePicture,friend_status};
                        
                        const result=await addFriends.insertOne(body);
                        
                        if(result){
                            req.message="Request Sent Successfully";
                            
                        }else{
                            req.message="Something went wrong";
                        }
                    }
                    return next();
                }
                else{
                    req.message="You can't add yourself"; 
                }
                return next();
        
            }
            else{
                req.message="This number does't exist."; 
            }
            return next();
        } 
        else{
            req.message="Something went wrong";
            return next();
        }
    }
    catch(error){
        console.log(error);
        return next();
        req.message="Something went wrong";
    }
 
 
 }
 
module.exports={addFriendToList};
