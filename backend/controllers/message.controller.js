import Message from '../models/message.model.js';
import Conversation from '../models/conversation.model.js';

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        console.log("senderId", senderId, "receiverId", receiverId, "message", message);
        if (!message) {
            return res.status(400).json({ message: 'Message is required' });
        }

        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({ members: [senderId, receiverId] });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });
        
        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([newMessage.save(), conversation.save()]);

        res.status(201).json({ message: 'Message sent successfully' });

    } catch (error) {
        console.error("Error in sendMessage", error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

export const getMessages = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        const conversations = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        }).populate('messages');

        if (!conversations) {
            return res.status(200).json({ messages: [] });
        }

        const messages = conversations.messages;
        res.status(200).json({ messages });


        res.status(200).json({ conversations });
    } catch (error) {
        console.error("Error in getMessages", error);
        res.status(500).json({ message: 'Internal server error' });
        
    }
}