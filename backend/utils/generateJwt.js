import jwt from 'jsonwebtoken';

const generateJwt = (user, res) => {
    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '7d' });
    console.log
    res.cookie('token', token, { sameSite: 'strict', maxAge: 86400 * 1000, secure: true });
}

export default generateJwt;