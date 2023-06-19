const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipe');
//comment back in when you have something in userroutes folder
router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);


module.exports = router;
