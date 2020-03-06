const Message = require('../models/message');

module.exports = {
    sendMessages,
    retrieveMessages
};

async function sendMessages(req, res) {
    try {
        const message = await Message.create(req.body);
        res.json({ message });
    } catch (err) {
        res.status(401).json({ err: 'unauthorized' });
    }
}

async function retrieveMessages(req, res) {
    try {
        const messages = await Message.find({});
        res.json(messages);
    } catch (err) {
        res.status(401).json({ err: 'unauthorized' });
    }
}
