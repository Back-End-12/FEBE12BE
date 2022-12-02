const jwt = require("jsonwebtoken");
const user = require("../models/User");

// get the token
const jwtGenerateToken = function(){
    return jwt.sign({id: this.id}, process.env.JWT_SECRET, {
        expiresIn: 3600
    });
}

const generateToken = async (user, statusCode, res) =>{

    const token = await user.jwtGenerateToken();

    const options = {
        httpOnly: true,
        expires: new Date(Date.now() + process.env.EXPIRE_TOKEN)
    };

    res
    .status(statusCode)
    .cookie('token', token, options )
    .json({success: true, token})
}

//const generateToken = (id) => {
 // return jwt.sign({ id }, 'febe12', {
   // expiresIn: "3d"
 // });
// };

module.exports = generateToken;
