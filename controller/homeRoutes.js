const router = require('express').Router()
const session = require('express-session');
const express =require('express')
const app = express();

//Import models here! 
router.get('/login', (req, res) => {
  //if user logged in render them to home routes if not render to handlebars
  if (req.session.loggedIn) {
res.render('homepage')
  }
    res.render('login')
  })
  app.use (session ({
    secret:'yourSecertKey',
    resave: false,
    saveUninitialized: true
  }))

app.get ('/', function(req, res) {
  if (req.session.loggedIn){
    res.send('welcome')
  } else { 
    res.redirect('/login')
  }
})

router.get('/', (req, res) => {
  //Query database here
console.log("homeroutes")
  res.render('homepage')
})

router.get('/recipes', (req, res) => {
  //Query database here

  res.render('recipelist')
})


module.exports = router