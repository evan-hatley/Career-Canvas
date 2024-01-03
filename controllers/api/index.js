const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', loginRoutes);

module.exports = router;