const pg = require('pg');

const dbConfig = new pg.Pool({
    host: process.env.DB_HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
})

module.exports = dbConfig;