const jwt = require('jsonwebtoken');
const User = require("../models/User");
const ErrorResponse = require('../utils/errorResponse');


// check if user is authenticated
exports.isAuthenticated = async (req, res, next) =>{

    const {authorization} = req.headers;

    // make sure token exists
    if (!authorization){
        return next (new ErrorResponse('You must log in to access this ressource', 401));
    }

    try {
        //verify token
        const decoded = jwt.verify(authorization, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();

    } catch (error) {
        return next (new ErrorResponse('You must log in to access this ressource', 401));
    }
}

// admin middleware
exports.isAdmin = (req, res, next) =>{
    if (req.user.status === 0){
        return next (new ErrorResponse('Access denied, you must be an admin', 401));
    }
    next();

}
