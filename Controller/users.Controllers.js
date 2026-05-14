const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Empty field check
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            message: "User Registered Successfully"
        });

    } catch (error) {

        console.log("REGISTER ERROR:", error);

        res.status(500).json({
            message: error.message
        });
    }
};


// Login
const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

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
            { expiresIn: "1h" }
        );

        res.status(200).json({
            message: "Login Successful",
            token
        });

    } catch (error) {

        console.log("LOGIN ERROR:", error);

        res.status(500).json({
            message: error.message
        });
    }
};


// Update
const update = async (req, res) => {

    try {

        const { username, email, password } = req.body;

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        user.username = username || user.username;
        user.email = email || user.email;

        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }

        await user.save();

        res.json({
            message: "User Updated"
        });

    } catch (error) {

        console.log("UPDATE ERROR:", error);

        res.status(500).json({
            message: error.message
        });
    }
};


// Delete
const Delete = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        await User.findByIdAndDelete(req.params.id);

        res.json({
            message: "User Deleted"
        });

    } catch (error) {

        console.log("DELETE ERROR:", error);

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    register,
    login,
    update,
    Delete
};