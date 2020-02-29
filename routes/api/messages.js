const router = require('express').Router();
const msgsCtrl = require('../../controllers/messages');

router.post('/chatrooms', msgsCtrl.sendChat);

module.exports = router;
