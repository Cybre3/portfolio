import React from "react";
// import codingPic from "./codingPic.png";

function CardCodeChallenge(props) {
  // const hoverText = `${props.projectTitle} \n Click to see live demo`;
  // let newHoverText = hoverText.split("\n").map((i) => {
  //   return <p>{i}</p>;
  // });

  return (
    // <div className="card bg-dark border border-primary rounded">
    //   <img className="card-img-top" src={codingPic} height='100px' width='60px' alt="coding-pic" /> {/* put image in Link */}
    //   <div className="card-header bg-transparent border-light text-light">Header</div>
    //   <div className="card-body text-light">
    //     <h5 className="card-title">{props.projectName}</h5>
    //     <p className="card-text">
    //       Some quick example text to build on the card title and make up the bulk of the card's
    //       content.
    //     </p>
    //       <a href="/" className="btn btn-primary mr-2" role="button"> {/* exchange to Links */}
    //         Live Project
    //       </a>
    //       <a href="/" className="btn btn-primary float-right" role="button">
    //         GitHub Code
    //       </a>
    //   </div>
    // </div>
    <div>
      <div className="codeChalCard">
        <img src={props.image} className="codeChalImg" alt={props.projectTitle} />

        {/* <h5 className="card-title">Card title</h5> */}
        <p className="card-text">{props.projectTitle}</p>
        <a href={props.projectLink} className="btn btn-primary float-start">
          {props.button1}
        </a>
        <a href={props.githubCode} className="btn btn-primary float-end">
          {props.button2}
        </a>
      </div>
    </div>
  );
}

export default CardCodeChallenge;
/* 


*/
