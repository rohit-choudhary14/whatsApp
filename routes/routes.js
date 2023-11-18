const config =require("../decl/decl");
const storage_path=require("../storage/storage")

const {app}=require("../express/initExpress")


app.post('/store-fcm-token', config.authenticateToken,config.storeFcmToken,async(req, res) => {
    if(req.user.id){
        res.status(200).send('FCM token stored successfully');
    }
    else{
        res.status(200).send('We are facing trouble to store FCM token');
    }      
});
app.get("/",config.authenticateToken,config.FetchUser,(req,res)=>{
    if (req.user) {
        res.render('home',{id:req.user.id,user_name:req.userName,about:req.userAbout,profilePicture:req.profilePicture});
    }
    else{
        res.render('index');
    }
        
   
})
app.get("/login",config.authenticateToken,config.FetchUser,(req,res)=>{
    
    if (req.user) {
        res.render('home',{id:req.user.id,user_name:req.userName,about:req.userAbout});
    }
    else{
        res.render('index');
    }

})
app.get('/profile',config.authenticateToken, config.FetchUser,(req, res) => {
    if (req.user) {
        res.render('home',{id:req.user.id,user_name:req.userName,about:req.userAbout});
    }else{
        res.render('index');
    }
    

});
  
app.post("/signIn",config.read,config.registerUser,(req,res)=>{
       res.end();
      
});

app.post("/api/updateUserName",config.authenticateToken,config.updateUser,(req,res)=>{
    if (req.user) {
        res.json({ message:"succesfully updated"});
    }else{
        res.json({ message:"somethin went wrong"});
    }    
})
app.get("/api/getFriendList",config.authenticateToken,config.findFreinds,(req,res)=>{
    if (req.user) {
        res.json(req.queryResult);
    }else{
        res.json(req.message);
    } 
});
app.get("/api/activeFriendList",config.authenticateToken,config.activeFriendList,(req,res)=>{
    if (req.user) {
        res.json(req.queryResult);
    }else{
        res.json(req.message);
    } 
})
app.get("/api/recivedRequestList",config.authenticateToken,config.recivedRequest,(req,res)=>{
    if (req.user) {
        res.json(req.queryResult);
    }else{
        res.json(req.message);
    } 
});
app.post("/api/accept-request",config.authenticateToken,config.accept_request,(req,res)=>{
    if (req.user) {
        res.json(req.message);
    }else{
        res.json(req.message);
    } 
});
app.post("/api/addFriend",config.authenticateToken,config.addFriendToList,(req,res)=>{
    if (req.user) {
        res.json(req.message);
    }else{
        res.json(req.message);
    } 
})
app.post("/api/findFriends",config.authenticateToken,config.findFreinds,(req,res)=>{
    if (req.user) {
        res.json({ usersList:req.queryResult});
    }else{
        res.json({ message:"somethin went wrong"});
    } 
})
app.post("/api/remove_from_friendList",config.authenticateToken,config.removeFreinds,(req,res)=>{
    if (req.user) {
        res.json({ message:req.message});
    }else{
        res.json({ message:"somethin went wrong"});
    } 
}) 
app.get("/start/active/chat/:id",config.authenticateToken,config.chatRecord,(req,res)=>{
   
    if(req.user){
      
        res.render("startChat",{id:req.user.id,x_id:req.params.id,Xname:req.X_user,profilePicture:req.profilePicture,user_mobile:req.userMobile});
    }else{
       res.redirect("/");
    }
})
app.post("/upload/profile-picture/:authId",config.authenticateToken,storage_path.upload.single('image'),config.updateProfile,(req,res)=>{
    if(req.user){
        res.json({"message":"Profile updated"});
    }else{
        res.json({"message":"You have been logout"});
    }
})

app.post("/send/message/", config.authenticateToken, storage_path.destructure.single('image'),config.chatController,(req, res, next) => {
    if (req.user) {
       res.json(req.successcode);
      
    } else {
        res.redirect("/");
    }
})

app.post("/getChat/history",config.authenticateToken,config.chatHistoryController,(req,res)=>{
    if(req.user){
        res.send({history:req.queryData});
    }else{
       res.redirect("/");
    }
})