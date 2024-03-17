import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "../scss/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { get, set } from "../services/localStorage.js";
import Landing from "./Landing";
import Catalog from "./Catalog";

function App() {
  const [data, setData] = useState(
    get("data", {
      title: "", // Nombre del proyecto
      slogan: "", // Slogan del proyecto
      technologies: "", // Tecnologías
      repo: "", // Repo
      demo: "", // Demo
      description: "", // Descripción
      autor: "", // Nombre de la autora
      job: "", // Trabajo de la autora
      image: "", // Foto de la autora
      photo: "", // Foto del proyecto
    })
  );

  const changeData = (nameProp, newValue) => {
    const clonData = { ...data };
    clonData[nameProp] = newValue;
    setData(clonData);
  };

  const [responseFetch, setResponseFetch] = useState("");

  const [responseFetchCatalog, setResponseFetchCatalog] = useState("");

  useEffect(() => {
    set("data", data);
  }, [data]);

  const handleFetchCreate = () => {
    fetch("/api/projectCard", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((dataResponse) => {
        setResponseFetch(dataResponse);
      });
  };

  const handleFetchCatalog = () => {
    fetch("/api/projectCard"),
      {}
        .then((response) => response.json())
        .then((dataResponse) => {
          setResponseFetchCatalog(dataResponse);
        });
  };

  async function loadData() {
    const response = await fetch("http://localhost:3000/api/pets");
    const data = await response.json();
    console.log(data);
    petsArray = data.results;
    renderAllPets();
  }
  loadData();

  const updateAvatarAuthor = (photo) => {
    const clonData = { ...data };

    clonData.photo = photo;

    setData(clonData);
  };

  const updateAvatarProject = (image) => {
    const clonData = { ...data };

    clonData.image = image;

    setData(clonData);
  };

  return (
    <div>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/catalog"
            element={
              <Catalog
                responseFetchCatalog={responseFetchCatalog}
                handleFetchCatalog={handleFetchCatalog}
              />
            }
          />
          <Route
            path="/main"
            element={
              <Main
                changeData={changeData}
                data={data}
                updateAvatarAuthor={updateAvatarAuthor}
                updateAvatarProject={updateAvatarProject}
                onSubmit={handleFetchCreate}
                responseFetch={responseFetch}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
