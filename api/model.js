const db = require('../data/db-config.js');

const getRecipeById = async (recipe_id) => {
  const recipeInfo = await db('recipes as r')
    .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
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
      'i.ingredient_unit',
      'si.quantity',
      'r.created_at'
    )
    .where('r.recipe_id', recipe_id)
    .orderBy('s.step_number');

  let formattedRecipe = {
    recipe_id: recipe_id,
    recipe_name: recipeInfo[0]['recipe_name'],
    created_at: recipeInfo[0]['created_at'],
    steps: recipeInfo.reduce((acc, row) => {
      if (!row.ingredient_id) {
        return acc.concat({
          step_id: row.step_id,
          step_number: row.step_number,
          step_instructions: row.step_instructions,
        });
      }
      if (row.ingredient_id && !acc.find((step) => step.step_id === row.step_id)) {
        return acc.concat({
          step_id: row.step_id,
          step_number: row.step_number,
          step_instructions: row.step_instructions,
          ingredients: [
            {
              ingredient_id: row.ingredient_id,
              ingredient_name: row.ingredient_name,
              quantity: row.quantity,
            },
          ],
        });
      }
      const currentStep = acc.find((step) => step.step_id === row.step_id);
      currentStep.ingredients.push({
        ingredient_id: row.ingredient_id,
        ingredient_name: row.ingredient_name,
        quantity: row.quantity,
      });
      return acc;
    }, []),
  };

  return formattedRecipe;
};

module.exports = {
  getRecipeById,
};
