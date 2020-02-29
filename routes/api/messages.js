const router = require('express').Router();
const msgsCtrl = require('../../controllers/messages');

router.post('/chatrooms', msgsCtrl.sendMessages);
// router.get('/chatrooms', msgsCtrl.retrieveMessages);

module.exports = router;
