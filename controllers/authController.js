const User = require('../models/User');
const jwt = require('jsonwebtoken');

//handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { full_name: '', username: '', email: '', password: '', status: '' };

    //validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    // incorrect username
    if (err.message === 'incorrect username') {
        errors.username = 'that username is not registered';
    }

    // incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'that password is incorrect';
    }

    //duplicate error code
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        errors.username = 'that username is already registered';
        return errors;
    }

    return errors;
}

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'BE 12', {
        expiresIn: maxAge
    })
}

module.exports.signup_post = async (req, res) => {
    const { full_name, username, email, password, status, } = req.body;

    try {
        const user = await User.create({ full_name, username, email, password, status });
        res.status(201).json({ 
            user: user._id,
            username: user.username,
            email: user.email,
            status: user.status
         });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors })
    }
}
module.exports.signin_post = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.signin(username, password);
        const token = createToken(user._id);
        res.status(200).json({ 
            user_id: user._id,
            status: user.status,
            user_token: token
         })
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.send('user sudah keluar');
}