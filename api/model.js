const db = require('../data/db-config.js');

const getRecipeById = async (recipe_id) => {
  // SELECT r.recipe_id, r.recipe_name, s.step_id, s.step_number, s.step_instructions, i.ingredient_name, si.quantity
  // FROM recipes r
  // JOIN steps s
  // ON r.recipe_id = s.recipe_id
  // LEFT JOIN step_ingredients si
  // ON s.step_id = si.step_id
  // LEFT JOIN ingredients i
  // ON si.ingredient_id = i.ingredient_id
  // WHERE r.recipe_id = 2;

  const recipeInfo = await db('recipes as r')
    .join('steps as s', 'r.recipe_id', 's.recipe_id')
    .leftJoin('step_ingredients as si', 's.step_id', 'si.step_id')
    .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
    .select(
      'r.recipe_id',
      'r.recipe_name',
      's.step_id',
      's.step_number',
      's.step_instructions',
      'i.ingredient_name',
      'i.ingredient_id',
      'si.quantity'
    )
    .where('r.recipe_id', recipe_id)
    .orderBy('s.step_number');

  let formattedRecipe = {
    recipe_id: recipe_id,
    recipe_name: recipeInfo[0]['recipe_name'],
    steps: [],
  };

  formattedRecipe.steps = recipeInfo.map((rec) => {
    if (!formattedRecipe.steps.includes(rec)) {
      return {
        step_id: rec.step_id,
        step_number: rec.step_number,
        step_instructions: rec.step_instructions,
        ingredients: {
          ingredient_id: rec.ingredient_id,
          ingredient_name: rec.ingredient_name,
          quantity: rec.quantity
        }
      };
    }
  });

  // formattedRecipe.steps.filter(rec => {

  // })

  return formattedRecipe;
};

module.exports = {
  getRecipeById,
};
