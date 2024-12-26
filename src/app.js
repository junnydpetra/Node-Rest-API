import express from 'express'

const app = express()

/* Telling Express to read JSON format */
app.use(express.json())

/* mock */
const teams = [
    {id: 1, team: 'Brazil', group: 'G'},
    {id: 2, team: 'Switzerland', group: 'G'},
    {id: 3, team: 'Serbia', group: 'G'},
    {id: 4, team: 'Cameroon', group: 'G'},
]

/* Get element by ID */
function getTeamById(id) {
    return teams.filter( teams => teams.id == id )
}

/* Get index of element in array by ID */
function getIndexTeam(id) {
    return teams.findIndex( teams => teams.id == id )
}

/* creating a default route */
app.get('/', (req, res) => {
    res.send('Hi, there!')
})

app.get('/teams', (req, res) => {
    res.status(200).send(teams)
})

app.get('/teams/:id', (req, res) => {
    res.json(getTeamById(req.params.id))
})

app.post('/teams', (req, res) => {
    teams.push(req.body)
    res.status(201).send('Successfully registered team')
})

app.delete('/teams/:id', (req, res) => {
    let index = getIndexTeam(req.params.id)
    teams.splice(index, 1)
    res.send(`Team ID ${req.params.id} record deleted successfully!`)
})

app.put('/teams/:id', (req, res) => {
    let index = getIndexTeam(req.params.id)
    teams[index].team = req.body.team
    teams[index].group = req.body.group
    res.json(teams)
})

export default app