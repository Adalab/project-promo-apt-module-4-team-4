// nuestro servidor Express

//IMPORTAR BIBLIOTECAS

const express = require("express");
const cors = require("cors");

const mysql = require("mysql2/promise");

//CREAR VARIABLES

const server = express();
const port = 3000; // 1025 - 65365

// http://   localhost  :  3000   /   path

//CONFIGURACIÓN

server.use(cors());
server.use(express.json());

//CONFIGURACIÓN DE MYSQL

async function getConnection() {
  const connection = await mysql.createConnection({
    host: "sql.freedb.tech:3306",
    database: "freedb_Proyectos molones",
    user: "freedb_indrakl",
    password: "equipo4",
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
