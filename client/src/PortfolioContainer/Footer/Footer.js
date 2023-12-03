import React from 'react';

import FooterSection from './FooterSection';

import './Footer.css';


const projects = [
  { title: 'Product Sorter', link: 'https://product-sorter.netlify.app/' },
  { title: 'ParkMe Valet', link: 'https://parkme-valet.netlify.app/' },
  { title: 'Password Generator', link: 'https://password-generator-vanillajs.netlify.app/' },
  { title: 'Secret Santa App', link: 'https://family-secret-santa-app.netlify.app/' },
  /*  {
    title: 'Wiki Blog',
    githubCode: 'https://github.com/Cybre3/KingsWikiApp',
    link: 'https://kings-wiki-blog.herokuapp.com/',
  },
  {
    title: '3dfmb',
    link: 'http://www.3dfmb.com',
  },
  {
    title: 'Rubix Cube',
    githubCode: 'https://github.com/Cybre3/cubeExpressGen',
    link: 'https://kings-cube-app.herokuapp.com/',
  }, */
  /*    {
      title: "Zephlipgloss",
      description: "Eccomerce Lipgloss website",
      link: "https://61b98b11d3e7375e5af0e4b7--zephlipgloss-client.netlify.app",
      githubCode: "https://github.com/Cybre3/Zephlipgloss/tree/admin",
      image:
        "https://d33wubrfki0l68.cloudfront.net/61b98b11d3e7375e5af0e4b7/screenshot_2021-12-15-06-31-17-0000.png",
    }, */
  // {
  //   title: 'Course Enroll',
  //   githubCode: 'https://github.com/Cybre3/KingsVideoTutorialApp',
  //   link: 'https://kings-video-course-app.herokuapp.com/',
  // },
];

const upcomingProjs = [{ title: 'Mortal Kombat App' }, {title: 'E ccomerce Lipgloss website'}];

function Footer(props) {
  return (
    <footer className="footer-container">
      <div className="text-center p-3" style={{ backgroundColor: '#f2e9de' }}>
        <div className="col">
          <a href="https://www.facebook.com/star.mccloud">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/starrika-mccloud-802a251a1/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/xybri/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://github.com/Cybre3">
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div className="footer-sections">
          <FooterSection header="Projects" list={projects} />
          <FooterSection header="Upcoming Projects" list={upcomingProjs} />
          <FooterSection header="Lighting Tech/Design work" />
          <FooterSection header="Rock Climbing" />
        </div>
        This Has Been Fun! Come Again!
      </div>
    </footer>
  );
}

export default Footer;
