import { Router } from "express"
import { createTutor } from "../controllers/tutor.controller"

const tutorRouter = Router()

tutorRouter.post("/tutor", createTutor)


export default tutorRouter