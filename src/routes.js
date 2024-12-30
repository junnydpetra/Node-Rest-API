
import { Router } from "express";
import TeamController from "./app/controllers/TeamController.js";

const router = Router()

router.get('/teams', TeamController.index)
router.get('/teams/:id', TeamController.show)
router.post('/teams', TeamController.store)
router.put('/teams/:id', TeamController.update)
router.delete('/teams/:id', TeamController.delete)

export default router