import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom";

// Obtiene el hostname de la URL actual
const hostname = window.location.hostname;

// Define el basename basado en el hostname
let basename = "/";
if (hostname === "localhost") {
  basename = "/";
} else {
  // Si el hostname no es localhost, se asume que es el dominio de producción
  basename = "/myapp"; // Cambia a la ruta correspondiente en tu dominio de producción
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
