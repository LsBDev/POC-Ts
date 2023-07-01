import { Router } from "express"
import { createDog, deleteDog, getDogs, updateDog } from "../controllers/dog.controller"

const dogRouter = Router()
dogRouter.post("/dog", createDog)
dogRouter.get("/dogs", getDogs)
dogRouter.delete("/dog/:id", deleteDog)
dogRouter.put("/dog/:id", updateDog)

export default dogRouter