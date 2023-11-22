const jwt = require('jsonwebtoken');
const registerAuth=(data,res)=>{
   
         const user = { id: data._id, username: data.user_name,mobile_number:data.mobile_number};
         const secretKey = process.env.JWT_SECRET;
         const token = jwt.sign(user, secretKey, { expiresIn: '24h' });
         res.cookie('token', token, { httpOnly: true, maxAge: 36000000000 }); // 1 hour expiration
         return res.redirect('/');
}
module.exports={registerAuth}