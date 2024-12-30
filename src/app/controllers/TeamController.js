import TeamRepository from '../repositories/TeamRepository.js'

class TeamController {

    async index(req, res) {
        const result = await TeamRepository.findAll()
        res.json(result)
    }
    
    async show(req, res) {
        const id = req.params.id
        const row = await TeamRepository.findById(id)
        res.json(row)
    }
    
    async store(req, res) {
        const team = req.body
        const row = await TeamRepository.create(team)
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.id
        const team = req.body
        const row = await TeamRepository.update(team, id)
        res.json(row)
    }
    
    async delete(req, res) {
        const id = req.params.id
        const row = await TeamRepository.delete(id)
        res.json(row)
    }

}

/* Singleton Pattern */
export default new TeamController()

