const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT Token
const generateToken = (id, userType) => {
    return jwt.sign({ id, userType }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Register User
const registerUser = async (req, res) => {
    const { name, email, password, userType } = req.body;

    // Simple validation
    if (!name || !email || !password || !userType) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = await User.create({ name, email, password: hashedPassword, userType });
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            userType: newUser.userType,
            token: generateToken(newUser._id, newUser.userType),
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            userType: user.userType,
            token: generateToken(user._id, user.userType),
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { registerUser, loginUser };
