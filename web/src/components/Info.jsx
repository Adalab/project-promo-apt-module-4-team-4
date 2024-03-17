import InputText from "./InputText";
import InputUrl from "./InputUrl";

function Info({ changeData, data }) {
  const handleChange = (event) => {
    const changedValue = event.currentTarget.value;
    const attrIdOfInpunt = event.currentTarget.id;
    changeData(attrIdOfInpunt, changedValue);
  };
  return (
    <>
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <InputText
          changeData={changeData}
          data={data}
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
          onChange={handleChange}
          value={data.title}
        />
        <InputText
          changeData={changeData}
          data={data}
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          onChange={handleChange}
          value={data.slogan}
        />
        <div className="addForm__2col">
          <InputUrl
            changeData={changeData}
            data={data}
            name="repo"
            id="repo"
            placeholder="Repositorio"
            onChange={handleChange}
            value={data.repo}
          />
          <InputUrl
            changeData={changeData}
            data={data}
            name="demo"
            id="demo"
            placeholder="Demo"
            onChange={handleChange}
            value={data.demo}
          />
        </div>
        <InputText
          changeData={changeData}
          data={data}
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
          onChange={handleChange}
          value={data.technologies}
        />
        <textarea
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
          onChange={handleChange}
          value={data.desc}
        ></textarea>
      </fieldset>
    </>
  );
}

export default Info;
