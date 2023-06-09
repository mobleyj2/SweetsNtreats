const router = require('express').Router()
//Import models here! 
const { User, project } = require('../models')


router.get('/', async (req, res) => {
  //Query database here
try { 
  const userData = await User.findAll({
    catch: (err) => {
      res.status(400).json(err)
    }
  })
  const users = userData.map((user) => user.get({ plain: true }))
  res.render('homepage', {
    users,
    logged_in: req.session.logged_in
  })
} catch (err) {


  res.render('homepage')
}})

router.get('/recipes', (req, res) => {
  //Query database here

  res.render('recipelist')
})


module.exports = router