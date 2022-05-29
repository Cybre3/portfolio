import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CardSCC from "./CardSCC";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./SmallCodeChallenge.css";

import productSortAppPic from '../../assets/SmallCodeChallenges/ProductSorter.png'
import wordManifestAppPic from '../../assets/SmallCodeChallenges/word-manifest.png'
import forcastAppPic from '../../assets/SmallCodeChallenges/forecast.png'
import fisherGmaeAppPic from '../../assets/SmallCodeChallenges/fisher-game.png'
import ticTacToeAppPic from '../../assets/SmallCodeChallenges/tic-tac-toe.png'

function SmallCodeChallenge(props) {
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
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
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
    {title: "React Demo Tic-Tac-Toe", src: ticTacToeAppPic, link: "https://demo-react-tic-tac-toe-demo.netlify.app/"},
    {title: "Product Sorter", src: productSortAppPic, link: "https://product-sorter.netlify.app/"},
    {title: "Forecast", src: forcastAppPic, link: "https://first-forecast-app.herokuapp.com/"},
    {title: "Word Manifest", src: wordManifestAppPic, link: "https://word-manifest.netlify.app/"},
    {title: "Fisher Catches", src: fisherGmaeAppPic, link: "https://my-fisher-catches.herokuapp.com/"},
  ]

  return (
    <div className="small-code-challenge-container fade-in" id={props.id || ""}>
      <ScreenHeading
        title={"Small Coding Challenges"}
        subHeading={"Small and Fun JavaScript Apps"}
      />
      <section className="SmallCodeChallenges-section">
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="SmallCodeChallenges-carousel" {...options}>
            {challenges.map((challenge, index) => (
              <CardSCC key={index} title={challenge.title} src={challenge.src} link={challenge.link} />
            ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={require("../../assets/SmallCodeChallenges/shape-bg.png")} alt="no internet connection" />
      </div>
    </div>
  );
}

export default SmallCodeChallenge;
