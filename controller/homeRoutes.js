const router = require('express').Router();
const session = require('express-session');
const express = require('express');
const app = express();

// Import models here! 
const { User, Recipe } = require('../models');

router.get('/cookies', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({ where: { category: 'cookies' } });
    const cookies = recipeData.map((recipe) => recipe.get({ plain: true }));
    res.render('cookies', {
      loggedIn: req.session.logged_in,
      cookies
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/newrecipe', async (req, res) => {
  res.render('postRecipe', {
    loggedIn: req.session.logged_in
  });
});

router.get('/', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll();
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    res.render('homepage', {
      loggedIn: req.session.logged_in,
      recipes
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/candies', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({ where: { category: 'candies' } });
    const candies = recipeData.map((recipe) => recipe.get({ plain: true }));
    res.render('candies', {
      loggedIn: req.session.logged_in,
      candies
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/login', (req, res) => {
  res.render('login');
});



router.get('/dashboard', async (req, res) => {
  //Query database here
  try {
    const recipeData = (await Recipe.findAll());

    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    console.log(recipes)
    res.render('dashboard', {
      loggedIn: req.session.logged_in, 
      recipes
    })
}
  catch (err) {
    res.status(400).json(err)



module.exports = router;