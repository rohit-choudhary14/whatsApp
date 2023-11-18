const {connection}=require('../db_connect/mongooseConnect');
const {registerUser}=require('../controllers/LoginController');
const {read}=require('../controllers/RegisteredUser');
const {authenticateToken}=require("../Middleware/Auth");
const {updateUser}=require("../controllers/updateUserDetailsController");
const {FetchUser}=require("../controllers/FetechUser");
const {addFriendToList}=require("../controllers/addFriendController");
const{findFreinds}=require("../controllers/searchFriendController");
const{activeFriendList}=require("../controllers/activeFriendList");
const{recivedRequest}=require("../controllers/recivedRequestList");
const{removeFreinds}=require("../controllers/remove_from_friendList");
const{accept_request}=require("../controllers/accept_friend_request");
const{chatRecord}=require("../controllers/chatRecord");
const{storeFcmToken}=require("../controllers/storeFcmToken");
const {chatController}=require("../controllers/chatController");
const {chatHistoryController}=require("../controllers/chatHistoryController");
const {updateProfile}=require("../controllers/updateProfile");
module.exports={
    connection,
    registerUser,
    read,
    authenticateToken,
    updateUser,
    FetchUser,
    addFriendToList,
    findFreinds,
    activeFriendList,
    recivedRequest,
    removeFreinds,
    accept_request,
    chatRecord,
    storeFcmToken,
    chatController,
    chatHistoryController,
    updateProfile

}
