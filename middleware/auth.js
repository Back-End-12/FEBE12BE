const jwt = require('jsonwebtoken');
const User = require("../models/User");
const ErrorResponse = require('../utils/errorResponse');


// // check if user is authenticated
// exports.isAuthenticated = async (req, res, next) =>{

//     const {authorization} = req.headers;

//     // make sure token exists
//     if (!authorization){
//         return next (new ErrorResponse('You must log in to access this ressource', 401));
//     }

//     try {
//         //verify token
//         const decoded = jwt.verify(authorization, process.env.JWT_SECRET);
//         req.user = await User.findById(decoded.id);
//         next();

//     } catch (error) {
//         return next (new ErrorResponse('You must log in to access this ressource', 401));
//     }
// }

exports.isAuthenticated = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ) {
        try {
          token = req.headers.authorization.split(" ")[1];
    
          //decodes token id
          const decoded = jwt.verify(token, 'febe15');
    
          req.user = await User.findById(decoded.id).select("-password");
    
          next();
        } catch (error) {
          res.status(401);
          throw new Error("Not authorized, token failed");
        }
      }
    
      if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
      }
})

// admin middleware
exports.isAdmin = async(req, res, next) => {
    if (req.user.status == 'admin'){
        next()
      }else{
        res.status(400);
        throw new Error('anda bukan admin');
      }
}
