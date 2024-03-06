import PropTypes from "prop-types";


import Hero from "./Hero";
import Preview from "./Preview";
import Info from "./Info";
import Author from "./Author";
import Buttons from "./Buttons";

function Main({
  changeData,
  data,
  updateAvatarAuthor,
  updateAvatarProject,
  onSubmit,
  responseFetch,
}) {
  return (
    <main className="main">
      <Hero linkTo="/catalog" text="Ver proyectos" />
      <Preview data={data} />
      <form className="addForm">
        <Info changeData={changeData} data={data} />
        <Author changeData={changeData} data={data} />
        <Buttons
          updateAvatarAuthor={updateAvatarAuthor}
          updateAvatarProject={updateAvatarProject}
          onSubmit={onSubmit}
          responseFetch={responseFetch}
        />
      </form>
    </main>
  );
}

Main.propTypes = {
  changeData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  updateAvatarAuthor: PropTypes.func.isRequired,
  updateAvatarProject: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  responseFetch: PropTypes.string.isRequired,
};

export default Main;
