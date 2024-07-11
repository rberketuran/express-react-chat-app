import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import generateJwt from '../utils/generateJwt.js';

const signup = async (req, res) => {
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
            return res.status(201).json({
                message: 'Signup successful',
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    username: user.username,
                    email: user.email
                }
            });
        }

    } catch (error) {
        console.log('Error in signup controller: ', error.message);
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        generateJwt(user._id, res);
        return res.status(200).json({ message: 'Login successful', user });

    } catch (error) {
        console.log('Error in login controller: ', error.message);
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

const logout = (req, res) => {
    try {
        res.clearCookie('token');
        return res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.log('Error in logout controller: ', error.message);
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

export { signup, login, logout };
