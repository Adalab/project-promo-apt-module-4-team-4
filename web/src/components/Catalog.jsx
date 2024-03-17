import PropTypes from "prop-types";

import Card from "./Card";
import Hero from "./Hero";

function Catalog({ responseFetchCatalog, handleFetchCatalog }) {
  return (
    <>
      <Hero linkTo="/main" text="Nuevo proyecto" />
      <div className="home-page-container homepage">
        <ul className="homepage__projects">
          <li className="homepage__project">
            <Card
              data={responseFetchCatalog}
              handleFetchCatalog={handleFetchCatalog}
            />
          </li>
          <li className="homepage__project">
            <Card data={responseFetchCatalog} />
          </li>
          <li className="homepage__project">
            <Card data={responseFetchCatalog} />
          </li>
          <li className="homepage__project">
            <Card data={responseFetchCatalog} />
          </li>
        </ul>
      </div>
    </>
  );
}

Catalog.propTypes = {
  responseFetchCatalog: PropTypes.object.isRequired,
  handleFetchCatalog: PropTypes.func.isRequired,
};

export default Catalog;
