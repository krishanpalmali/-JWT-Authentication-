const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {

    const { username , email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);



    try {

        const newUSer = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUSer.save();   
        res.status(201).json({ message: "User Registered" });

    } catch (error) {
        res.status(500).json({ message: "Error Registering User"        
        })
    
    }
};

 const login = async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({
            email
        });

        if (!user) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            token
        });

    } catch (error) {

        res.status(500).json({
            message: "Error Logging In"
        });
    }
 }

module.exports = {
    register,
    login
}
