const router = require('express').Router();
const userRoutes = require('./loginRoutes');

router.use('/users', loginRoutes);

module.exports = router;
