import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: 'https://res.cloudinary.com/djz3p9q92/image/upload/v1630656480/avatars/avatar-1_zv6y8v.png'
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;