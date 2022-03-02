/*const knex = require('knex')(
    require('./knexfile')[process.env.NODE_ENV || "production"]
);*/

const knex = require('knex')({
    client: 'postgresql',
    connection: {
        host: 'project-starlight-database.cidcg5bmrsjg.us-east-2.rds.amazonaws.com',
        port: 5432,
        user: 'starlight_admin',
        password: 'Tiger315!',
        database: 'project_starlight'
    }
});

module.exports = knex;