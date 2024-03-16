import PropTypes from "prop-types";

function ButtonSave({ onSubmit }) {
  const handleClick = (event) => {
    event.preventDefault();
    onSubmit();
  };
  return (
    <button className="button--large" onClick={handleClick}>
      Guardar proyecto
    </button>
  );
}

ButtonSave.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ButtonSave;
