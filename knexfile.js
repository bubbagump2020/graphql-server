/**
 * @type { Object.string, import("knex").Knex.Config}
 */

module.exports = {
    production: {
        client: 'postgresql',
        connection: {
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            user: process.env.DBUSER,
            password: process.env.PGPASSWORD,
        },
        pool: {
            min: 2,
            max: 10
        }
    }
}