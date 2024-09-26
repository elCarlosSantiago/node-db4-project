const router = require('express').Router();
const Recipes = require('./model');

router.get('/:id', async (req, res, next) => {
  try {
    const recipe = await Recipes.getRecipeById(req.params.id);
    res.json(recipe);
  } catch (err) {
    next(err);
  }
});

//eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
