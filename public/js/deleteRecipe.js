const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');


router.delete('/api/recipes/:title', async (req, res) => {
  const titleToDelete = req.params.title;

  try {
    // Find the recipe with the given title
    const recipe = await Recipe.findOne({ where: { title: titleToDelete } });

    if (!recipe) {
      
      return res.status(404).json({ error: 'Recipe not found' });
    }

    
    await recipe.destroy();

    res.sendStatus(204); 
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ error: 'Failed to delete recipe' });
  }
});

module.exports = router;

  