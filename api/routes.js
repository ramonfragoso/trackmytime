const express = require("express");
const router = express.Router();

const user = require('./app/routes/user.route');

router.get('/', (req, res) => {
    return res.send('Track My Time API ;D');
});


router.use('/user', user);

module.exports = router;
