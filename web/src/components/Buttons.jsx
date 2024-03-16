import PropTypes from "prop-types";

import GetAvatar from "./GetAvatar";
import ButtonSave from "./ButtonSave";

function Buttons({
  updateAvatarProject,
  updateAvatarAuthor,
  onSubmit,
  responseFetch,
}) {
  return (
    <fieldset className="addForm__group--upload">
      <GetAvatar
        updateAvatar={updateAvatarProject}
        for="image"
        text="Subir foto del proyecto"
        name="image"
        id="image"
      />
      <GetAvatar
        updateAvatar={updateAvatarAuthor}
        for="photo"
        text="Subir foto de la autora"
        name="photo"
        id="photo"
      />
      <ButtonSave onSubmit={onSubmit} />
      {responseFetch !== "" && responseFetch.success && (
        <p className="upload-error">
          Tu proyecto ha sido creado en la siguiente dirección:{""}
          <a className="upload-link" href={responseFetch.cardURL}>{responseFetch.cardURL}</a>
        </p>
      )}
      {responseFetch !== "" && !responseFetch.success && (
        <p className="upload-error">Ha ocurridio un error: {responseFetch.error}</p>
      )}
    </fieldset>
  );
}

Buttons.propTypes = {
  updateAvatarAuthor: PropTypes.func.isRequired,
  updateAvatarProject: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  responseFetch: PropTypes.string.isRequired,
};

export default Buttons;
