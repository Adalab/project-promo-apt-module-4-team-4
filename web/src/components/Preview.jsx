import PropTypes from "prop-types";

import Card from "./Card";

import defaultImage from "../images/design-example.jpg";

function Preview({ data }) {
  return (
    <section className="preview">

      <div className="projectImage" style= {{ backgroundImage: `url(${data.image || defaultImage })` }}></div>
      <Card 
        data={data} 
      />
    </section>
  );
}

Preview.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Preview;
