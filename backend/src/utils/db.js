const mysql = require("mysql2/promise")

async function getConnection() {
    const connection = await mysql.createConnection({
        host: 'database',
        user: 'perlego',
        password: 'perlego',
        database: 'perlego'
    })
    return connection
}

module.exports = getConnection
