const router = require('express').Router()
const session = require('express-session');
const express =require('express')
const app = express();

//Import models here! 

app.use(session({
  secret: 'yourSecretKey',
  resave: false,
  saveUninitialized: true
}));

router.get('/cookies', (req, res) => {
  //if user logged in render them to home routes if not render to handlebars
  if (req.session.loggedIn) {
res.render('homepage')
  }
    res.render('cookies')
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
    res.redirect('/cookies')
  }
})

router.get('/', (req, res) => {
  //Query database here
console.log("homeroutes")
  res.render('homepage')
})

router.get('/candies', (req, res) => {
  //Query database here

  res.render('candies')
})

router.get('/dashboard', (req, res) => {
  //Query database here

  res.render('dashboard')
})


module.exports = router
