import { Tutor } from "../protocols/index.protocol";
import { createTutorDB, deleteTutorDB } from "../repositories/tutor.repository";

export async function  createTutorService(body: Tutor) {
  const result = await createTutorDB(body)
  if(result.rowCount === 0 || !result) {
    throw {type: "error", message: "Verifique os dados"}
  }else {
    return result
  }
}

export async function deleteTutorService(id: string) {
  const result = await deleteTutorDB(id)
  console.log(result)
  return result
}