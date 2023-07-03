import { db } from "../database/database.connection";
import { Tutor } from "../protocols/index.protocol";

export function createTutorDB({name, email, phone}: Tutor) {
  return db.query(`
    INSERT INTO Tutores (nome, email, telefone) VALUES ($1, $2, $3)
  `, [name, email, phone])
}

export function deleteTutorDB(id: string) {
  return db.query(`
    DELETE FROM Tutores
    WHERE Tutores.id = $1;
  `, [id])
}