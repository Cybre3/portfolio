const router = require('express')();
const contactController = require('../controllers/contactController');

router.post('/contact', contactController.post.sendMessage);

module.exports = router;
