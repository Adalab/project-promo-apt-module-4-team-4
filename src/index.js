// nuestro servidor Express

//IMPORTAR BIBLIOTECAS

const express = require("express");
const cors = require("cors");
//const path = require ('path');

const mysql = require("mysql2/promise");
const { log } = require("console");
require("dotenv").config();

//CREAR VARIABLES

const server = express();
const port = 3000; // 1025 - 65365

// http://   localhost  :  3000   /   path

//CONFIGURACIÓN

server.use(cors());
server.use(express.json());

//CONFIGURACIÓN DE MYSQL

// .env variables de entorno
async function getConnection() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DB,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
  });

  await connection.connect();

  console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`
  );

  return connection;
}

// ARRANCAR EL SERVIDOR

server.listen(port, () => {
  console.log(`Servidor iniciado escuchando en http://localhost:${port}`);
});

// ENDPOINTS

//Crear projectos
server.post("/api/projectCard", async (req, rest) => {
  // Datos vienen req.body

  //1.conectar a lqa base de datos

  const conn = await getConnection();

  //2.insertar los datos de la autora Author

  const insertAuthor = `
INSERT author (name, job, image)
VALUES (?, ?, ?)`;

  conn.execute(insertAuthor, [req.body.name, req.body.job, req.body.image]);

  //3.recupero el id de Authors

  console.log(resultsInsertAuthor.insertId);

  //4.insertar el proyecto. añadir fkauthor en project. el campo idauthor de la tabla author esta realcionado. dos inserts

  const insertProject = `
INSERT projects (title, slogan, repo, demo, technologies, \`description\`, image, fkAuthor)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  const [resuktsInsertProject] = await conn.execute(insertProject, [
    req.body.title,
    req.body.slogan,
    req.body.repo,
    req.body.demo,
    req.body.technologies,
    req.body.description,
    req.body.image,
    fkAuthor,
  ]);

  //5.Recupero el id de project

  const idProject = resultsInsertProject.insertId;
  //6.cierro la conexión
  conn.end();
  //7.devuelvo el json
  res.json({
    sucess: true,
    cardURL: `http://localhost:${port}/projectCard/${idProject}`,
  });
});

// API listar proyectos
server.get("/api/projectCard", (req, res) => {
  //1. Conectar con la BD
  //2. Lancar SELECT para recuperar todos los proyectos de la BD
  //3. Cierro conexion
  //4. Devuelvo un json con los resultados
});

//Mostrar detalle projecto (servidor de dinámicos)
server.get("/projectCard/:id", async (req, res) => {
  // Recibo el id del proyecto en un URL param

  //1. Conectar con la BD

  const conn = await getConnection();
  //2. Lanzar SELECT para recuperar 1 proyecto con el id <- req.params

  const selectProjects = `
SELECT *
    FROM author a
        JOIN projects p ON (a.idAuthor = p.fkAuthor)
    WHERE p.idProject = ?
;
`;
  const [results] = await conn.query(selectProjects, [req.params.id]); //repsar el req.params

  //3. Hago un template (EJS)
  //4. Cierro conexion
  conn.end();
  //5. res.render ('plantiilla', resultado)

  const data = {};

  res.render(`detail`, data);
});

//   GET   http://localhost:3000/project

server.get(`/project`, async (req, res) => {
  console.log("pidiendo a la base de datos información de las tarjetas");

  //LANZAR UN SELECT

  let sql = "SELECT * FROM project;";

  // CONECTAR CON LA BASE DE DATOS

  const connection = await getConnection();
  const [results] = await connection.query(sql);
  res.json(results);

  // CERRAMOS LA CONEXIÓN

  connection.end();
});

/*async function api() {
  const resp = await fetch("");
  const data = await resp.json();
}*/

// SERVIDOR ESTÁTICOS

server.use(express.static("./public"));
