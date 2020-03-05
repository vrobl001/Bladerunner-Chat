const router = require('express').Router();
const msgsCtrl = require('../../controllers/messages');

router.use(require('../../config/auth'));

router.post('/chatrooms', isAuthenticated, msgsCtrl.sendMessages);
router.get('/chatrooms', isAuthenticated, msgsCtrl.retrieveMessages);

// Helper functions
function isAuthenticated(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'not authorized' });
}

module.exports = router;
