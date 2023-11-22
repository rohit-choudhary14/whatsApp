const { getDatabase } = require("../db_connect/mongooseConnect");
const activeFriendList = async (req, res, next) => {
  try {
    const DB = getDatabase();
    const addFriends = DB.collection("addFriends");
    // find logged user details
    let logged_user_mobile = req.user.mobile_number;
    let result = await addFriends
      .find({
        $or: [
          { sender_mobile_number: logged_user_mobile, friend_status: 1 },
          { reciver_mobile_number: logged_user_mobile, friend_status: 1 },
        ],
      })
      .toArray();
    if (result && result.length > 0) {
      const jsonResult = JSON.stringify(result);
      req.queryResult = jsonResult;
    } else {
      req.queryResult = null;
      req.message = "Something went wrong";
    }
    return next();
  } catch (error) {
    console.log(error);
    req.message = "Something went wrong";
    return next();
  }
};
module.exports = { activeFriendList };
