const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema(
    {
        chatTopic: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        msg: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);