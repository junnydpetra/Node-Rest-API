import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'JunnyJunny12-',
    database: 'db_api_rest'
})

connection.connect()

/**
 * Run SQL code containing or not values
 * @param {string} sql query to be executed 
 * @param {string=id | [team, id]} values ​​to be passed to sql
 * @param {*} rejectMessage message to be displayed in case of rejection
 * @returns promise object
 */
export const data_query = (sql, values='', rejectMessage) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (error, result) => {
            if (error) return reject (rejectMessage)
            const row = JSON.parse(JSON.stringify(result)) 
            return resolve(row)
        })
    })
}

export default connection