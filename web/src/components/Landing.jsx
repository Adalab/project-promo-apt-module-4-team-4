import { Link } from "react-router-dom";

function Landing() {

  
  return (
    <div className="home-page-container homepage landing">
      <div className="homepage__card">
        <h1 className="homepage__title title">Proyectos molones</h1> 
        <p className="homepage__description">Escaparate en línea para recoger ideas a través de la tecnología.</p> 
        <Link to="/main">
          <button className="homepage__button button--link">Nuevo proyecto</button>
        </Link>
        <Link to="/catalog">
          <button className="homepage__button button--link">Catálogo de proyectos</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
