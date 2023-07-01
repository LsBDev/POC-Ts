import { db } from "../database/database.connection"
import { Dog } from "../protocols/index.protocol"

export function checkDogDB({name, tutor_id}) {
  return db.query(`
    SELECT * FROM Cachorros
    WHERE nome = $1 AND tutor_id = $2;
  `, [name, tutor_id]
  )
}

export function createDogDB({name, age, race, weight, tutor_id}: Dog) {
  return db.query(`
    INSERT INTO Cachorros (nome, idade, raca, peso, tutor_id) VALUES($1, $2, $3, $4, $5)
  `, [name, age, race, weight, tutor_id]
  )
}

export function getDogsDB() {
  return db.query(`
    SELECT * FROM Cachorros;
  `)
}

export function deleteDogDB(id) {
  return db.query(`
    DELETE FROM Cachorros
    WHERE Cachorros.id = $1;
  `, [id])
}