// conneting to the db

require('dotenv').config
const {createPool} = require('mysql')
const dbConnection = createPool({
    host: process.env.dbHost,
    database: process.env.dbName,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    multipleStatements: true,
    connectionLimit:15
});

module.exports= dbConnection;