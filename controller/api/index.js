const router = require('express').Router();
const userRoutes = require('./userRoutes');

//comment back in when you have something in userroutes folder
router.use('/users', userRoutes);


module.exports = router;
