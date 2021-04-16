exports.up = function (knex) {
  return knex.schema
    .table('ingredients', (tbl) => {
      tbl.string('ingredient_unit').notNullable();
    })
    .table('recipes', (tbl) => {
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex.schema.table.dropColumn('created_at').table.dropColumn('ingredient_unit');
};
