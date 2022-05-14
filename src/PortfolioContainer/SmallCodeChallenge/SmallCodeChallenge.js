import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CardSCC from "./CardSCC";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./SmallCodeChallenge.css";

import productSortAppPic from '../../assets/SmallCodeChallenge/ProductSorter.png'

function Testimonial(props) {
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
    {title: "React Demo Tic-Tac-Toe", src: "https://d33wubrfki0l68.cloudfront.net/61b90ffdfbbcc00007523ad6/screenshot_2021-12-14-21-44-28-0000.png"},
    {title: "Product Sorter", src: productSortAppPic},
    {title: "", src: ""},
    {title: "", src: ""},
    {title: "", src: ""},
  ]

  return (
    <div className="fade-in" id={props.id || ""}>
      <ScreenHeading
        title={"Small Coding Challenges"}
        subHeading={"Small and Fun JavaScript Apps"}
      />
      <section className="testimonial-section">
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>
            {challenges.map((challenge, index) => (
              <CardSCC title={challenge.title} src={challenge.src} />
            ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={require("../../assets/Testimonial/shape-bg.png")} alt="no internet connection" />
      </div>
    </div>
  );
}

export default Testimonial;
