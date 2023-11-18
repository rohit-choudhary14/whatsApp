const jwt = require('jsonwebtoken');
function authenticateToken(req, res,next) {
    const token = req.cookies.token; // Get the token from cookies
    if (!token) {
    //    return res.redirect("/login");
    return next();
    }
    const secretKey = process.env.JWT_SECRET;
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Token is not valid' });
      }
      req.user = user;
      return next();
    });
  }
  module.exports={authenticateToken};