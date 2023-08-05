import React from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';

// Images
import JS_ICON from '../../assets/Technologies/logos/javaScript-logo.png';
import MONGODB_ICON from '../../assets/Technologies/logos/mongodb-logo.png';
import EXPRESS_ICON from '../../assets/Technologies/logos/expressjs-logo.png';
import REACT_ICON from '../../assets/Technologies/logos/react-logo.png';
import NODE_ICON from '../../assets/Technologies/logos/nodejs-logo.png';
import GIT_ICON from '../../assets/Technologies/logos/git-logo.png';
import JQUERY_ICON from '../../assets/Technologies/logos/jquery-logo.png';
import TYPESCRIPT_ICON from '../../assets/Technologies/logos/typescript-logo-sm.png';
import VSCODE_ICON from '../../assets/Technologies/logos/vscode-logo.png';
import BOOTSTRAP_ICON from '../../assets/Technologies/logos/bootstrap-logo.png';
import FIREBASE_ICON from '../../assets/Technologies/logos/firebase-logo.png';
import LODASH_ICON from '../../assets/Technologies/logos/lodash-logo.png';
import MOCHA_ICON from '../../assets/Technologies/logos/mocha-logo.png';
import NETLIFY_ICON from '../../assets/Technologies/logos/netlify-logo.png';
import HEROKU_ICON from '../../assets/Technologies/logos/heroku-logo.png';
import RAILWAY_ICON from '../../assets/Technologies/logos/railway-logo.png';
import RENDER_ICON from '../../assets/Technologies/logos/render-logo.png';
import POSTMAN_ICON from '../../assets/Technologies/logos/postman-logo.png';
import SLACK_ICON from '../../assets/Technologies/logos/slack-logo.png';
import GITHUB_ICON from '../../assets/Technologies/logos/github-logo.png';
import TAILWINDCSS_ICON from '../../assets/Technologies/logos/tailwindcss-logo.png';
import REDUX_ICON from '../../assets/Technologies/logos/redux-logo.png';

const techIcons = [
  { name: 'JavaSCript', icon: JS_ICON },
  { name: 'MongoDB', icon: MONGODB_ICON },
  { name: 'Express', icon: EXPRESS_ICON },
  { name: 'React', icon: REACT_ICON },
  { name: 'Node', icon: NODE_ICON },
  { name: 'Node', icon: GIT_ICON },
  { name: 'Node', icon: JQUERY_ICON },
  { name: 'Node', icon: TYPESCRIPT_ICON },
  { name: 'Node', icon: VSCODE_ICON },
  { name: 'Node', icon: BOOTSTRAP_ICON },
  { name: 'Node', icon: FIREBASE_ICON },
  { name: 'Node', icon: LODASH_ICON },
  { name: 'Node', icon: MOCHA_ICON },
  { name: 'Node', icon: NETLIFY_ICON },
  { name: 'Node', icon: HEROKU_ICON },
  { name: 'Node', icon: RAILWAY_ICON },
  { name: 'Node', icon: RENDER_ICON },
  { name: 'Node', icon: POSTMAN_ICON },
  { name: 'Node', icon: SLACK_ICON },
  { name: 'Node', icon: GITHUB_ICON },
  { name: 'Node', icon: TAILWINDCSS_ICON },
  { name: 'Node', icon: REDUX_ICON },
];

const ImageBox = ({ name, icon }) => (
  <img src={icon} alt={name} width="130px" className="m-4" />
);

function Technologies(props) {
  return (
    <div id={props.id || ''}>
      <div className="d-flex flex-row flex-wrap justify-content-center pb-2">
        <ScreenHeading
          title="Technologies"
          subHeading="Langueages, Libraries & other technologies"
        />
        {techIcons.map(({ name, icon }, idx) => (
          <ImageBox key={idx} name={name} icon={icon} />
        ))}
      </div>
    </div>
  );
}

export default Technologies;
