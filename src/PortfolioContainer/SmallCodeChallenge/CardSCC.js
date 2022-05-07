import React from "react";

function CardSCC(props) {
  return (
    <div className="col-lg-12">
      <div className="testi-item">
        <div className="testi-comment">
          <img src={props.src} alt={props.title} />
        </div>
        <div className="client-info">
          <h5>{props.title}</h5>
        </div>
      </div>
    </div>
  );
}

export default CardSCC;
