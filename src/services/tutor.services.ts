import { Tutor } from "../protocols/index.protocol";
import { createTutorDB } from "../repositories/tutor.repository";

export async function  createTutorService(body: Tutor) {
  return await createTutorDB(body) 
}