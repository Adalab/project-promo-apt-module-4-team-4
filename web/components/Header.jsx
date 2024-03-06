import { Link } from "react-router-dom";

import laptopImage from "../images/laptop-code-solid.svg";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__brand">
          <img
            className="header__companyLogo"
            src={laptopImage}
            alt="Logo proyectos molones"
          />
          <h1 className="header__title">Proyectos molones</h1>
        </div>
      </Link>

      {/*
      <div className="comparte">
        <span className="header__title">Comparte tu proyecto</span>
        <img className="logoSponsor" src={adalabImage} alt="Logo Adalab" />
      </div>
      */}
    </header>
  );
}

export default Header;
