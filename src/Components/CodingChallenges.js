import CardCodeChallenge from "./SubComponents/CardCodeChallenge";

function CodingChallenges(props) {
  return (
    <div className="container">
      <div className="card-deck d-flex justify-content-center">
        <CardCodeChallenge button1='Live Demo' button2="GitHub Code" projectTitle='React Demo Tic-Tac-Toe' projectLink="https://demo-react-tic-tac-toe-demo.netlify.app/" image='https://d33wubrfki0l68.cloudfront.net/61b90ffdfbbcc00007523ad6/screenshot_2021-12-14-21-44-28-0000.png' githubCode='https://github.com/Cybre3/React_tic-tac-toe' />        
        <CardCodeChallenge button1='Live Demo' button2="GitHub Code"/>
        <CardCodeChallenge button1='Live Demo' button2="GitHub Code"/>
        
      </div>
    </div>
  );
}

export default CodingChallenges;