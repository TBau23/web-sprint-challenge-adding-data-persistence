
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
        tbl.increments()
        tbl.string("projectName").notNullable().unique().index()
        tbl.string('description')
        tbl.integer('completed').defaultTo(0)
    })

    .createTable("tasks", tbl => {
        tbl.increments()
        tbl.string("description").notNullable()
        tbl.string("notes")
        tbl.integer("completed").defaultTo(0)

        tbl.integer("project_id")
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")

    })

    .createTable("resources", tbl => {
        tbl.increments()
        tbl.string("resourceName").notNullable().unique().index()
        tbl.string("description")
    })

    .createTable("projects_resources", tbl => {
        tbl.increments()

        tbl.integer("project_id")
            .unsigned()
            .references("id")
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate("CASCADE")
        
        tbl.integer("resource_id")
            .unsigned()
            .references("id")
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate("CASCADE")
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
