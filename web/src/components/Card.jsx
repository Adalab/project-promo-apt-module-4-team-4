import PropTypes from "prop-types";

import defaultPhoto from '../images/avatar.webp';

function Card({ data }) {
  return (
    <a href={`/projectCard/${data.idproject}`}>
    <article className="card">
      <h2 className="card__projectTitle">
        <span className="card__projectTitle--text">Personal project card</span>
      </h2>

      <div className="card__author">
        <div className="card__authorPhoto" style= {{ backgroundImage: `url(${data.photo || defaultPhoto })` }}></div>
        <p className="card__job">{data.job || "Full stack Developer"}</p>
        <h3 className="card__name">{data.name || "Emmelie Bjôrklund"}</h3>
      </div>

      <div className="card__project">
        <h3 className="card__name">{data.title || "Elegant Workspace"}</h3>
        <p className="card__slogan">{data.slogan || "Diseños Exclusivos"}</p>
        <h3 className="card__descriptionTitle">Product description</h3>
        <p className="card__description">
          {data.description ||
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quosItaque, molestias eveniet laudantium adipisci vitae ratione"}
        </p>

        <div className="card__technicalInfo">
          <p className="card__technologies">
            {data.technologies || "React JS - HTML - CSS"}
          </p>

          <a
            className="icon icon__www"
            href={data.repo}
            target="_blank"
            rel="noreferrer"
            title="Haz click para ver el proyecto online"
          >
            Web link
          </a>
          <a
            className="icon icon__github"
            href={data.demo}
            target="_blank"
            rel="noreferrer"
            title="Haz click para ver el código del proyecto"
          >
            GitHub link
          </a>
        </div>
      </div>
    </article>
    </a>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
