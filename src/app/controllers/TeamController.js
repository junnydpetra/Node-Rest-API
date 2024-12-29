class TeamController {

    index(req, res) {
        const sql = "SELECT * FROM tab_teams;"
        connection.query(sql, (error, result) => {        
            if (error) {
                res.status(404).json( { 'error': error } )
            } else {
                res.status(200).json(result)  
            }
        })
    }
    
    show(req, res) {
        const id = req.params.id
        const sql = "SELECT * FROM tab_teams WHERE tea_id=?;"
        connection.query(sql, id, (error, result) => {
            const line = result[0]
            if (error)
                res.status(404).json( { 'error': error } )
            
            res.status(200).json(line)
        })
    }
    
    store(req, res) {
        const team = req.body
        const sql = "INSERT INTO tab_teams SET ?;"
        connection.query(sql, team, (error, result) => {
            if (error)
                res.status(404).json( { 'error': error } )
    
            res.status(201).json(result)
        })
    }

    update(req, res) {
        const id = req.params.id
        const team = req.body
        const sql = "UPDATE tab_teams SET ? WHERE tea_id=?;"
        connection.query(sql, [team, id], (error, result) => {
            if (error)
                res.status(400).json( { 'error': error } )

            res.status(200).json(result)
        })
    }

    delete(req, res) {
        const id = req.params.id
        const sql = "DELETE FROM tab_teams WHERE tea_id=?;"
        connection.query(sql, id, (error, result) => {
            if (error)
                res.status(404).json( { 'error': error } )
            
            res.status(200).json(result)
        })
    }

}

/* Singleton Pattern */
export default new TeamController()

