import InputText from "./InputText";

function Author({ changeData, data }) {
  const handleChange = (event) => {
    const changedValue = event.currentTarget.value;
    const attrIdOfInpunt = event.currentTarget.id;
    changeData(attrIdOfInpunt, changedValue);
  };
  return (
    <fieldset className="addForm__group">
      <legend className="addForm__title">Cuéntanos sobre la autora</legend>
      <InputText
        changeData={changeData}
        data={data}
        name="autor"
        id="autor"
        placeholder="Nombre"
        onChange={handleChange}
        value={data.autor}
      />
      <InputText
        changeData={changeData}
        data={data}
        name="job"
        id="job"
        placeholder="Trabajo"
        onChange={handleChange}
        value={data.job}
      />
    </fieldset>
  );
}

export default Author;
