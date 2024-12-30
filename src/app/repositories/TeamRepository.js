import { data_query } from "../database/connection.js"

class TeamRepository {

    create(team){
        const sql = "INSERT INTO tab_teams SET ?;"
        return data_query(sql, team, 'Unable to register team!')
    }
    
    findAll(){        
        const sql = "SELECT * FROM tab_teams;"
        return data_query(sql, 'Team registrations not found!')
    }

    findById(id){
        const sql = "SELECT * FROM tab_teams WHERE tea_id=?;"
        return data_query(sql, id, 'Team not found!')
    }

    update(team, id){
        const sql = "UPDATE tab_teams SET ? WHERE tea_id=?;"
        return data_query(sql, [team, id], 'Unable to update team record!')
    }

    delete(id){
        const sql = "DELETE FROM tab_teams WHERE tea_id=?;"
        return data_query(sql, id, 'Unable to delete team record!')
    }

}

export default new TeamRepository()