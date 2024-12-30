import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'JunnyJunny12-',
    database: 'db_api_rest'
})

connection.connect()

export default connection