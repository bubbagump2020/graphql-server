/*const knex = require('knex')(
    require('./knexfile')[process.env.NODE_ENV || "production"]
);*/

const knex = require('knex')({
    client: 'postgresql',
    connection: {
        host: process.env.DATABASE_URL,
        port: process.env.PORT,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_P
    }
});

module.exports = knex;