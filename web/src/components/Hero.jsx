import PropTypes from "prop-types";

import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <section className="hero">
      <h2 className="title">Proyectos molones</h2>
      <p className="hero__text">
        Escaparate en línea para recoger ideas a través de la tecnología
      </p>
      <Link to={props.linkTo}>
        <button className="button--link">{props.text}</button>
      </Link>     
    </section>
  );
}

Hero.propTypes = {
  linkTo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Hero;
