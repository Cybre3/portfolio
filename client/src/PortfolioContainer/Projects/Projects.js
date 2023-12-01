import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import CardSCC from './CardSCC';

import productSortAppPic from '../../assets/SmallCodeChallenges/ProductSorter-2.0.png';
import passwordGenAppPic from '../../assets/SmallCodeChallenges/password-generator-pic.png';
import parkMeValetAppPic from '../../assets/SmallCodeChallenges/parkme-valet-pic.png';

import './Projects.css';

function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  //eslint-disable-next-line
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: 'bounceInRight',
    animateOut: 'bounceOutRight',
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  const challenges = [
    {
      title: 'Product Sorter',
      src: productSortAppPic,
      link: 'https://product-sorter.netlify.app/',
    },
    {
      title: 'Password Generator',
      src: passwordGenAppPic,
      link: 'https://password-generator-vanillajs.netlify.app/',
    },
    {
      title: 'ParkMe Valet App',
      src: parkMeValetAppPic,
      link: 'https://parkme-valet.netlify.app/',
    },
  ];

  return (
    <div className="small-code-challenge-container" id={props.id || ''}>
      <ScreenHeading title={'Projects'} subHeading={'Fun Javascript Apps'} />
      <section className="SmallCodeChallenges-section">
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="SmallCodeChallenges-carousel" {...options}>
              {challenges.map((challenge, index) => (
                <CardSCC
                  key={index}
                  title={challenge.title}
                  src={challenge.src}
                  link={challenge.link}
                />
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img
          src={require('../../assets/SmallCodeChallenges/shape-bg.png')}
          alt="no internet connection"
        />
      </div>
    </div>
  );
}

export default Projects;
