import { db } from "../database/database.connection"

export function createDogDB({name, age, race, weight, id}) {
  const result = db.query(`
    INSERT INTO dog (name, age, race, weight, id) VALUES($1, $2, $3, $4, $5)
    `, [name, age, race, weight, id]
  )
  return result
}