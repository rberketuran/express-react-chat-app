import User from "../models/user.model.js"

export const getUsers = async (req, res) => {
    try {
        const currentUserId = req.user._id
        const users = await User.find({ _id: { $ne: currentUserId } });
        res.status(200).json(users);
    } catch (error) {
        console.error("Error in getUsers: ", error);
    }
}