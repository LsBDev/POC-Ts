import { Router } from "express"
import dogRouter from "../routes/dog.routes"
import tutorRouter from "./tutor.routes"

const router = Router()
router.use(dogRouter)
router.use(tutorRouter)

export default router