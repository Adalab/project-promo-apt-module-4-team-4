import PropTypes from "prop-types";

import Card from "./Card";
import Hero from "./Hero";

function Catalog({ responseFetchCatalog }) {
  if (responseFetchCatalog  === undefined) {
    return (
      <>
      <Hero linkTo="/main" text="Nuevo proyecto" />
      <div className="home-page-container homepage">
        <p>Leyendo información</p>
        <div className="loading mt-1 ml-1"></div>
      </div>
      </>
    );
  }

  if (responseFetchCatalog.length === 0) {
    return (
      <>
      <Hero linkTo="/main" text="Nuevo proyecto" />
      <div className="home-page-container homepage">
        <p>No hay proyectos</p>
      </div>
      </>
    );
  }

  const cardHTML = responseFetchCatalog.map((projectCard) => (
    <li key={projectCard.id} className="homepage__project">
      <Card data={projectCard} />
    </li>
  ));

  return (
    <>
      <Hero linkTo="/main" text="Nuevo proyecto" />
      <div className="home-page-container homepage">
        <ul className="homepage__projects">{cardHTML}</ul>
      </div>
    </>
    )
}

Catalog.propTypes = {
  responseFetchCatalog: PropTypes.object.isRequired,
};

export default Catalog;
