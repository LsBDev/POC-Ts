import { Router } from "express"
import dogRouter from "../routes/dog.routes"

const router = Router()
router.use(dogRouter)

export default router