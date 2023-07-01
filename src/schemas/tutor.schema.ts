import Joi from "joi"
import { Tutor } from "../protocols/index.protocol"

export const tutorSchema = Joi.object<Tutor>({
  name: Joi.string().required(), 
  email: Joi.string().required(),
  phone: Joi.string().max(11).required()
})
