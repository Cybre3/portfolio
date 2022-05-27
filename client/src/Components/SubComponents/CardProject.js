import React from "react";
// import codingPic from "./codingPic.png";

function CardProject(props) {
  const hoverText = `${props.projectTitle} \n Click to see live demo`;
  let newHoverText = hoverText.split("\n").map((i) => {
    return <p>{i}</p>;
  });

  return (
    // <div className="card bg-dark border border-primary rounded">
    //   <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    //     <img
    //       className="card-img-top"
    //       src={props.image}
    //       height="100px"
    //       width="60px"
    //       alt="coding-pic"
    //     />{" "}
    //     {/* put image in Link */}
    //     <div className="card-header bg-transparent border-light text-light">Header</div>
    //     <div className="card-body text-light">
    //       <h5 className="card-title">{props.projectName}</h5>
    //       <p className="card-text">
    //         Some quick example text to build on the card title and make up the bulk of the card's
    //         content.
    //       </p>
    //       <a href="/" className="btn btn-primary mr-2" role="button">
    //         {" "}
    //         {/* exchange to Links */}
    //         Live Project
    //       </a>
    //       <a href="/" className="btn btn-primary float-right" role="button">
    //         GitHub Code
    //       </a>
    //     </div>
    //   </div>
    // </div>

    <div
      className="card bg-dark border border-2 border-primary rounded"
      style={{ maxHeight: "240px", minWidth: "300px", maxWidth: "450px" }}
    >
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src={props.image} className="img-fluid" alt={props.projectTitle} />
        <a href={props.projectLink}>
          <div
            className="mask p-4 text-center"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.45)" }}
          >
            <p
              className="mb-5 font-weight-bold"
              style={{
                color: "black",
                fontSize: "15px",
                backgroundColor: "rgba(251, 251, 251, 0.35)",
                borderRadius: "3em",
              }}
            >
              {newHoverText}
            </p>
            <a href={props.projectLink} className="btn btn-primary">
              {props.button1}
            </a>
            {props.githubCode ? (
              <a href={props.githubCode} className="btn btn-primary">
                {props.button2}
              </a>
            ) : null}
          </div>
        </a>
      </div>
      <div
        className="card-body text-center"
        style={{ minHeight: "100x", maxHeight: "150px", backgroundColor: "#A5A5A5" }}
      >
        {/* <h5 className="card-title">Card title</h5> */}
        {/* <p className="card-text font-weight-bold" style={{ color: "black", fontSize: "20px"}}>{props.projectTitle}</p> */}
      </div>
    </div>
  );
}

export default CardProject;
/* 


*/
