import PropTypes from "prop-types";

import Card from "./Card";
import Hero from "./Hero";

function Catalog( {data} ) {
  
  return (
    <>
    <Hero linkTo="/main" text="Nuevo proyecto" />
    <div className="home-page-container homepage">
      <ul className="homepage__projects">
        <li className="homepage__project"><Card data={data} /></li>
        <li className="homepage__project"><Card data={data} /></li>
        <li className="homepage__project"><Card data={data} /></li>
        <li className="homepage__project"><Card data={data} /></li>
      </ul>
    </div>
    </>
  );
}

Catalog.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Catalog;
