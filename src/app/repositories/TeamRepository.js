import connection from '../database/connection.js'

class TeamRepository {

    create(team){
        const sql = "INSERT INTO tab_teams SET ?;"
        return new Promise((resolve, reject) => {
            connection.query(sql, team, (error, result) => {
                if (error) return reject ('Error registering team!')

                /* Parse result */
                const row = JSON.parse(JSON.stringify(result)) 
                return resolve(result)
            })
        })
    }
    
    findAll(){        
        const sql = "SELECT * FROM tab_teams;"
        return new Promise((resolve, reject) => {
            connection.query(sql, (error, result) => {
                if (error) return reject ('Team not found!')

                /* Parse result */
                const row = JSON.parse(JSON.stringify(result)) 
                return resolve(result)
            })
        })
    }

    findById(id){
        const sql = "SELECT * FROM tab_teams WHERE tea_id=?;"
        return new Promise((resolve, reject) => {
            connection.query(sql, id, (error, result) => {
                if (error) return reject ('Team not found!')

                /* Parse result */
                const row = JSON.parse(JSON.stringify(result)) 
                return resolve(row)
            })

        })
    }

    update(team, id){
        const sql = "UPDATE tab_teams SET ? WHERE tea_id=?;"
        return new Promise((resolve, reject) => {
            connection.query(sql, [team, id], (error, result) => {
                if (error) return reject ('Unable to update team registration!')

                /* Parse result */
                const row = JSON.parse(JSON.stringify(result)) 
                return resolve(result)
            })

        })
    }

    delete(id){
        const sql = "DELETE FROM tab_teams WHERE tea_id=?;"
        return new Promise((resolve, reject) => {
            connection.query(sql, id, (error, result) => {
                if (error) return reject ('Unable to delete team registration!')

                /* Parse result */
                const row = JSON.parse(JSON.stringify(result)) 
                return resolve(row)
            })

        })
    }

}

export default new TeamRepository()