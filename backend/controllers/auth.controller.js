import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

import generateJwt from '../utils/generateJwt.js';

const register = async (req, res) => {
    try {
        const { fullname, username, email, password, passwordconfirm } = req.body;
        
        if (!fullname || !username || !email || !password || !passwordconfirm) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (password !== passwordconfirm) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        const userExists = await User.findOne({ $or: [{ username }, { email }] });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const user = await User.create({ fullname, username, email, password: hashedPassword });
        
        if (user) {
            generateJwt(user._id, res);
        }
        return res.status(201).json({ message: 'User created successfully', user });

    } catch (error) {
        console.log('Error in register controller: ', error.message);
        return res.status(500).json({ message: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if(!username || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const user = await User.findOne({ username });
        const validPassword = await bcrypt.compare(password, user?.password || "");

        if (!user || !validPassword) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        generateJwt(user._id, res);

        return res.status(200).json({ message: 'Login successful', user});
        
    } catch (error) {
        console.log('Error in login controller: ', error.message);
        return res.status(500).json({ message: error.message });
    }
}

const logout = (req, res) => {
    try {
        res.clearCookie('token');
        return res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.log('Error in logout controller: ', error.message);
        return res.status(500).json({ message: error.message });
    }
}

export { register, login, logout };