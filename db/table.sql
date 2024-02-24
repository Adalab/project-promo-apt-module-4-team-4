CREATE TABLE `projects`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `job` VARCHAR(45) NOT NULL,
  `image` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`idusers`));




CREATE TABLE `projects`.`project` (
  `idproject` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `slogan` VARCHAR(45) NOT NULL,
  `repo` VARCHAR(500) NOT NULL,
  `demo` VARCHAR(500) NOT NULL,
  `technologies` VARCHAR(45) NOT NULL,
  `description` TEXT NOT NULL,
  `image` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`idproject`));




SELECT * FROM users;

INSERT INTO users ( name, job, image)
VALUES 
( 'Mari Carmen', 'Full Stack', 'https://s1.eestatic.com/2023/03/10/curiosidades/mascotas/747436034_231551832_1706x1280.jpg'),
('Sofia' , 'Backend', 'https://estaticos-cdn.prensaiberica.es/clip/d91b850d-33b1-494b-8a99-ee54de862711_16-9-discover-aspect-ratio_default_0.jpg');



SELECT * FROM projects.project;

SELECT * FROM projects.project;

INSERT INTO project (title, slogan, repo, demo, technologies, description, image)
VALUES
('Adatasks', 'Gestiona tus tareas', 'https://github.com/Adalab/project-promo-a-pt-module-3-team-4','https://beta.adalab.es/project-promo-a-pt-module-3-team-4/', 'HTML, React, Sass', 'Desde esta web podras gestionar facilmente todas tus tareas diarias', 'https://assets.materialup.com/uploads/bd488274-a690-47b5-8267-5d6502df5172/preview.png'),
('Adivina el numero', 'juega adivinando el numero', 'https://github.com/Adalab/project-promo-a-pt-module-3-team-4','https://beta.adalab.es/project-promo-a-pt-module-3-team-4/', 'HTML, Sass, JavaScript', 'Juega para intentar adivinar el numero que nos da la maquina', 'https://assets.materialup.com/uploads/bd488274-a690-47b5-8267-5d6502df5172/preview.png');

SELECT * FROM projects.project;


