import jwt from 'jsonwebtoken';

const generateJwt = (id, res) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.cookie('token', token, { httpOnly: true, sameSite: 'strict', secure: true });
}

export default generateJwt;