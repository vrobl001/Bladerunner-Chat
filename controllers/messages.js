const Message = require('../models/message');

module.exports = {
    sendMessages,
    retrieveMessages
};

async function sendMessages(req, res) {
    try {
        const message = await Message.create(req.body);
        res.json({ message });
    } catch (error) {
        res.status(400).json(error);
    }
}

async function retrieveMessages(req, res) {
    const messages = await Message.find({});
    res.json(messages);
}
