import Joi from "joi"
import { Dog } from "../protocols/index.protocol"

export const dogSchema = Joi.object<Dog>({
  name: Joi.string().required(),
  age: Joi.number().required(),
  race: Joi.string().required(),
  weight: Joi.number().required(),
  tutor_id: Joi.number().required()
})