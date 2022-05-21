import React from "react";

function CardSCC(props) {
  const hoverText = `${props.title} \n Click to see live demo`;
  let newHoverText = hoverText.split("\n").map((line, index) => {
    return <p key={index}>{line}</p>;
  });

  return (
    <div className="col-lg-12">
      <div className="testi-item">
        <div className="testi-comment bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src={props.src} alt={props.title} />
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div
              className="mask p-4 text-center"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.45)" }}
            >
              <div
                className="mb-5 font-weight-bold"
                style={{
                  color: "black",
                  fontSize: "15px",
                  backgroundColor: "rgba(251, 251, 251, 0.35)",
                  borderRadius: "1em",
                }}
              >
                {newHoverText}
              </div>
            </div>
          </a>
        </div>
        <div className="client-info">
          <h5>{props.title}</h5>
        </div>
      </div>
    </div>
  );
}

export default CardSCC;