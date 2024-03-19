// nuestro servidor Express

//IMPORTAR BIBLIOTECAS

const express = require("express");
const cors = require("cors");
const path = require("path");

const mysql = require("mysql2/promise");
require("dotenv").config();

//CREAR VARIABLES

const server = express();
const port = process.env.PORT || 3000;

//CONFIGURACIÓN

server.use(cors());
server.use(express.json({ limit: "25mb" }));
server.set("view engine", "ejs");

//CONFIGURACIÓN DE MYSQL

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
server.post("/api/projectCard", async (req, res) => {
  // Datos vienen req.body

  // console.log(req.body);

  //1.conectar a lqa base de datos

  const conn = await getConnection();

  //2.insertar los datos de la autora Author

  const insertAuthor = `
    INSERT author (name, job, photo)
    VALUES (?, ?, ?)`;

  const [resultsInsertAuthor] = await conn.execute(insertAuthor, [
    req.body.name,
    req.body.job,
    req.body.photo,
  ]);

  //3.recupero el id de Authors

  //console.log(resultsInsertAuthor.insertId);
  const fkAuthor = resultsInsertAuthor.insertId;

  //console.log(fkAuthor);

  //4.insertar el proyecto. añadir fkauthor en project. el campo idauthor de la tabla author esta realcionado. dos inserts

  const insertProject = `
  INSERT project (title, slogan, repo, demo, technologies, description, image, fkAuthor)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  const [resultsInsertProject] = await conn.execute(insertProject, [
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

  const baseURL = process.env.NODE_ENV === 'production' ? 
  'https://project-promo-apt-module-4-team-4.onrender.com' : 'http://localhost:3000';

  res.json({
    success: true,
    cardURL: `${baseURL}/projectCard/${idProject}`,
  });
});

// API listar proyectos
server.get("/api/projectCard", async (req, res) => {

  //console.log(req.query)
  //1. Conectar con la BD

  const connection = await getConnection();

  //2. Lancar SELECT para recuperar todos los proyectos de la BD

  const sql = `
  SELECT *
      FROM author a
      JOIN project p ON (a.idusers = p.fkAuthor)
 `;
  const [results] = await connection.query(sql);

  //3. Cierro conexion

  connection.end();

  //4. Devuelvo un json con los resultados

  res.json({
    success: true,
    projects: results,
  });
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
          JOIN project p ON (a.idusers = p.fkAuthor)
      WHERE p.idproject = ?
  ;
  `;

  const [results] = await conn.query(selectProjects, [req.params.id]);

  //3. Hago un template (EJS)

  //4. Cierro conexion

  conn.end();

  //5. res.render ('plantilla', resultado)

  const data = results[0];
  res.render("detail", data);
});



/*async function api() {
  const resp = await fetch("");
  const data = await resp.json();
}*/

// SERVIDOR ESTÁTICOS

const staticServerPathWeb = "../public-react"; // En esta carpeta (en la raíz del proy) ponemos los ficheros estáticos
server.use(express.static(path.join(__dirname, staticServerPathWeb)));

const pathServerPublicStyles = './src/public-css';
server.use(express.static(pathServerPublicStyles));

const pathServerPublicImages = './src/public-images';
server.use(express.static(pathServerPublicImages));

// Ruta de redirección para todas las demás solicitudes
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, staticServerPathWeb, "index.html"));
});