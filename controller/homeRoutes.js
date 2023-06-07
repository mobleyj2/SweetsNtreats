const router = require('express').Router()
//Import models here! 

router.get('/', (req, res) => {
  //Query database here

  res.render('homepage')
})

router.get('/recipes', (req, res) => {
  //Query database here

  res.render('recipelist')
})


module.exports = router