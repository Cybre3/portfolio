import CardCodeChallenge from "./SubComponents/CardCodeChallenge";

function CodingChallenges(props) {
  return (
    <div className="bg-dark m-auto p-5">
      <div className="card-deck d-flex justify-content-center p-5">
        <CardCodeChallenge id="1" button1='Live Demo' button2="GitHub Code" projectTitle='React Demo Tic-Tac-Toe' projectLink="https://demo-react-tic-tac-toe-demo.netlify.app/" image="https://d33wubrfki0l68.cloudfront.net/61b90ffdfbbcc00007523ad6/screenshot_2021-12-14-21-44-28-0000.png" githubCode='https://github.com/Cybre3/React_tic-tac-toe' />        
        <CardCodeChallenge id="2" button1='Live Demo' button2="GitHub Code" projectTitle="one"/>
        <CardCodeChallenge id="3" button1='Live Demo' button2="GitHub Code" projectTitle="two" />
        
      </div>
    </div>
  );
}

export default CodingChallenges;