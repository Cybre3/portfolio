import React from "react";
import ProjectScrewedOnePageScroll from "./SubComponents/ProjectScrewedOnePageScroll";

function ProjectContainer(props) {
  const projects = [
    {
      title: "3dfmb",
      description: (
        <p className="skw">
          This family entertainment page is one of my very first project attempts. After teaching
          myself HTML and CSS, I decided to put what was learned to the test.<br></br>{" "}
          <em> Note: The Social media links do not work because they do not exist.</em>
        </p>
      ),
      projectLink: "http://www.3dfmb.com",
    },
    {
      title: "zephlipgloss",
      description: "Eccomerce Lipgloss website",
      projectLink: "https://61b98b11d3e7375e5af0e4b7--zephlipgloss-client.netlify.app",
      githubCode: "https://github.com/Cybre3/Zephlipgloss/tree/admin",
    },
    {
      title: "3dfm",
      description: (
        <p className="skw">
          This family entertainment page is one of my very first project attempts. After teaching
          myself HTML and CSS, I decided to put what was learned to the test.<br></br>{" "}
          <em> Note: The Social media links do not work because they do not exist.</em>
        </p>
      ),
      projectLink: "http://www.3dfmb.com",
    },
  ];

  // $(document).ready(function () {
    
  // });

  return (
    <div className="container">
      <ProjectScrewedOnePageScroll projects={projects} />
    </div>
  );
}

export default ProjectContainer;

// import CardProject from "./SubComponents/CardProject";

// function ProjectContainer(props) {
//   return (
//     <div className="container m-auto p-5">
//       <div className="card-deck d-flex justify-content-center p-5">
//         <CardProject
//           button1="Live Demo"
//           button2="GitHub Code"
//           projectTitle="3DFMB"
//           projectLink="http://www.3dfmb.com"
//           image='https://d33wubrfki0l68.cloudfront.net/61b90ffdfbbcc00007523ad6/screenshot_2021-12-14-21-44-28-0000.png'
//           githubCode="https://github.com/Cybre3/React_tic-tac-toe"
//         />
//         <CardProject button1="Live Demo" button2="GitHub Code" />
//         <CardProject button1="Live Demo" button2="GitHub Code" />
//       </div>
//     </div>
//   );
// }

// export default ProjectContainer;
