import React from 'react'
import PropTypes from "prop-types";
import "../css/components/Cards.css"


function Cards({ imageSource, ciudad, departamento, text }) {
  return (
    <div className="XCard text-center animate__animated animate__fadeInUp">
      <div className="overflow" >
        <div className="row justify-content-between align-items-center">
          <div className="col">
            <h4 className="XCard-title text-start m-4">{ciudad} ({departamento})</h4>
          </div>
          <div className="col-auto">
            <img src={imageSource} alt="a wallpaper" className="XCardIcon" />
          </div>
        </div>
      </div>

      <div className="XCard-body text-light">
        <p className="XCard-text">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
      </div>
    </div>
  );
}

Cards.propTypes = {
  ciudad: PropTypes.string.isRequired,
  departamento: PropTypes.string.isRequired,
  text: PropTypes.string,
  imageSource: PropTypes.string
};

export default Cards;
