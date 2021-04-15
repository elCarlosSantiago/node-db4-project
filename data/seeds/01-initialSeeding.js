
exports.seed = async function(knex) {
  await knex('recipes').insert([
    {recipe_name: 'Scrambled Eggs'},
    {recipe_name: 'Cast-Iron Steak'}
  ])
  await knex('ingredients').insert([
    {ingredient_name: 'egg'},
    {ingredient_name: 'salt'},
    {ingredient_name: 'pepper'},
    {ingredient_name: 'butter'},
    {ingredient_name: 'truffle oil'},
    {ingredient_name: 'olive oil'},
    {ingredient_name: 'garlic'},
    {ingredient_name: 'thyme'},
    {ingredient_name: 'rib-eye steak'}
  ])
  await knex('steps').insert([
    {step_number:1, step_instructions: 'Heat pan and apply butter', recipe_id:1},
    {step_number:2, step_instructions: 'Beat eggs in bowl with salt & pepper', recipe_id:1},
    {step_number:3, step_instructions: 'Pour egg mixture in pan over melted butter', recipe_id:1},
    {step_number:4, step_instructions: 'Cook until desired consistency', recipe_id:1},
    {step_number:5, step_instructions: 'Serve with truffle oil', recipe_id:1},
    {step_number:1, step_instructions: 'Season steak with salt & pepper', recipe_id:2},
    {step_number:2, step_instructions: 'Heat pan and apply olive oil until smoking', recipe_id:2},
    {step_number:3, step_instructions: 'Baste steak with butter, garlic, and thyme', recipe_id:2},
    {step_number:4, step_instructions: 'Cook medium-rare & serve after five minutes', recipe_id:2},
  ])
  await knex('step_ingredients').insert([
    {ingredient_id: 1, step_id: 2, quantity:'3 eggs'},
    {ingredient_id: 2, step_id: 2, quantity:'1 pinch'},
    {ingredient_id: 2, step_id: 6, quantity:'1 pinch'},
    {ingredient_id: 3, step_id: 2, quantity:'1 pinch'},
    {ingredient_id: 3, step_id: 6, quantity:'1 pinch'},
    {ingredient_id: 4, step_id: 1, quantity:'1 tablespoon'},
    {ingredient_id: 4, step_id: 8, quantity:'1 tablespoon'},
    {ingredient_id: 5, step_id: 5, quantity:'1 teaspoon'},
    {ingredient_id: 6, step_id: 7, quantity:'1 tablespoon'},
    {ingredient_id: 7, step_id: 8, quantity:'2 cloves'},
    {ingredient_id: 8, step_id: 8, quantity:'1 stem'},
    {ingredient_id: 9, step_id: 6, quantity:'1 steak'},

  ])
};
