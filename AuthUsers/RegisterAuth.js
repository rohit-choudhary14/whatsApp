const jwt = require('jsonwebtoken');
const registerAuth=(data,res)=>{
   
         const user = { id: data._id, username: data.user_name};
         const secretKey = process.env.JWT_SECRET;
         const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
         res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); // 1 hour expiration
         return res.redirect('/');
}
module.exports={registerAuth}