const { getDatabase } = require("../db_connect/mongooseConnect");
const findFreinds = async (req, res, next) => {
  try {
    
    const DB = getDatabase();
    const addFriends = DB.collection("addFriends");
    let logged_user_mobile = req.user.mobile_number;
    console.log(logged_user_mobile);
    let result = await addFriends
      .find(
        { sender_mobile_number: logged_user_mobile, friend_status: 0 },
        {
          sender_user_name: 1,
          reciver_user_id: 1,
          friend_status: 1,
          sender_mobile_number: 1,
          reciver_user_name: 1,
          reciver_mobile_number: 1,
        }
      )
      .toArray();

    if (result && result.length > 0) {
      console.log(result);
      const jsonResult = JSON.stringify(result);
      req.queryResult = jsonResult;
    } else {
      req.queryResult = null;
      req.message = "No data found";
    }

    return next();
  } catch (error) {
    console.log(error);
    req.message = "Something went wrong";
    return next();
  }
};

module.exports = { findFreinds };
