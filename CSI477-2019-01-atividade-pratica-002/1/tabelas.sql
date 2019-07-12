/*Tabela de usuarios*/
CREATE TABLE users (
  id int(10) NOT NULL,
  name varchar(191) NOT NULL,
  email varchar(191) NOT NULL,
  password varchar(191) NOT NULL,
  type tinyint(4),
  remember_token varchar(100) NOT NULL,
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL
);

ALTER TABLE users
  ADD PRIMARY KEY (id);
  
ALTER TABLE users
  MODIFY id int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

/*Tabela de procedimentos*/
CREATE TABLE procedures (
  id int(10) NOT NULL,
  name varchar(60) NOT NULL,
  price decimal(10,2) NOT NULL,
  user_id int(255),
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE procedures
  ADD PRIMARY KEY (id);
  
ALTER TABLE procedures
  MODIFY id int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

/*ALTER TABLE procedures ADD CONSTRAINT 'userID' FOREIGN KEY(user_id) REFERENCES users(id);*/

/*Tabela de testes*/
CREATE TABLE tests (
  id int(10) NOT NULL,
  user_id int(255),
  procedure_id int(10),
  tDate date NOT NULL,
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (procedure_id) REFERENCES procedures(id)
);

ALTER TABLE tests
  ADD PRIMARY KEY (id);
  
ALTER TABLE tests
  MODIFY id int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

/*ALTER TABLE tests ADD CONSTRAINT 'idUserTest' FOREIGN KEY(user_id) REFERENCES users(id);

ALTER TABLE tests ADD CONSTRAINT 'idProcedureTest' FOREIGN KEY(procedure_id) REFERENCES procedures(id);*/