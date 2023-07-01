-- DADOS TESTE

CREATE TABLE Tutores (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255),
  email VARCHAR(255),
  telefone VARCHAR(20)
);

CREATE TABLE Cachorros (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255),
  idade INT,
  raca VARCHAR(255),
  peso INT,
  tutor_id INT,
  FOREIGN KEY (tutor_id) REFERENCES Tutores(id)
);


INSERT INTO Tutores (nome, email, telefone)
VALUES
  ('João', 'joao@example.com', '(11) 1234-5678'),
  ('Maria', 'maria@example.com', '(22) 9876-5432'),
  ('Pedro', 'pedro@example.com', '(33) 5555-9999'),
  ('Ana', 'ana@example.com', '(44) 2468-1357'),
  ('Luisa', 'luisa@example.com', '(55) 3333-7777');

INSERT INTO Cachorros (nome, idade, raca, peso, tutor_id)
VALUES
  ('Max', 5, 'Labrador', 25, 1),
  ('Bella', 3, 'Poodle', 8, 1),
  ('Rocky', 2, 'Bulldog', 15, 2),
  ('Luna', 4, 'Golden Retriever', 27, 3),
  ('Charlie', 1, 'Beagle', 10, 4),
  ('Daisy', 6, 'Dachshund', 9.8, 5);