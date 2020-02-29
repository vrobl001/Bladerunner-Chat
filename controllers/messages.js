const Message = require('../models/message');

module.exports = {
    sendChat
};

async function sendChat(req, res) {
    try {
        const message = await Message.create(req.body);
        res.json({ message });
    } catch (error) {
        res.status(400).json(error);
    }
}
