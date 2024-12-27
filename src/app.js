import express from 'express'
import connection from '../infra/connection.js'

const app = express()

/* Telling Express to read JSON format */
app.use(express.json())

/* Get element by ID */
function getTeamById(id) {
    return teams.filter( teams => teams.id == id )
}

/* Get index of element in array by ID */
function getIndexTeam(id) {
    return teams.findIndex( teams => teams.id == id )
}

app.get('/teams', (req, res) => {
    const sql = "SELECT * FROM tab_teams;"
    connection.query(sql, (error, result) => {        
        if (error) {
            res.status(400).json( { 'error': error } )
        } else {
            res.status(200).json(result)  
        }
    })
})

app.get('/teams/:id', (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM tab_teams WHERE tea_id=?;"
    connection.query(sql, id, (error, result) => {
        const line = result[0]
        if (error)
            res.status(400).json( { 'error': error } )
        
        res.status(200).json(line)
    })
})

app.post('/teams', (req, res) => {
    const team = req.body
    const sql = "INSERT INTO tab_teams SET ?;"
    connection.query(sql, team, (error, result) => {
        if (error)
            res.status(400).json( { 'error': error } )

        res.status(201).json(result)
    })
})

app.delete('/teams/:id', (req, res) => {
    const id = req.params.id
    const sql = "DELETE FROM tab_teams WHERE tea_id=?;"
    connection.query(sql, id, (error, result) => {
        if (error)
            res.status(404).json( { 'error': error } )
        
        res.status(200).json(result)
    })
})

app.put('/teams/:id', (req, res) => {
    const id = req.params.id
    const team = req.body
    const sql = "UPDATE tab_teams SET ? WHERE tea_id=?;"
    connection.query(sql, [team, id], (error, result) => {
        if (error)
            res.status(400).json( { 'error': error } )

        res.status(200).json(result)
    })
})

export default app