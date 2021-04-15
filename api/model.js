const db = require('../data/db-config.js');

const getRecipeById = (recipe_id) => {
// SELECT r.recipe_id, r.recipe_name, s.step_id, s.step_number, s.step_instructions, i.ingredient_id, i.ingredient_name, si.quantity
// FROM recipes r 
// JOIN steps s 
// ON r.recipe_id = s.recipe_id
// JOIN step_ingredients si
// ON s.step_id = si.step_id
// JOIN ingredients i 
// ON si.ingredient_id = i.ingredient_id
// WHERE r.recipe_id = 1;

  return db('recipes')
}

module.exports = {
  getRecipeById
}