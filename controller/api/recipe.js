const router = require('express').Router();
const { Recipe } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newRecipe = await Recipe.create({...req.body, user_id: req.session.user_id});

    res.json(newRecipe);
   
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:title', async (req, res) => {
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