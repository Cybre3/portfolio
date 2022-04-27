import CodingChallenges from "./Components/CodingChallenges";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import Nav from "./Components/Nav";
import ProjectContainer from "./Components/ProjectContainer";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Route, Routes, useLocation } from "react-router";
// import { useEffect } from "react";

function App() {
  // const { pathname, hash, key } = useLocation();
  // useEffect(() => {
  //   // if not a hash link, scroll to top
  //   if (hash === "") {
  //     window.scrollTo(0, 0);
  //   }
  //   // else scroll to id
  //   else {
  //     setTimeout(() => {
  //       const id = hash.replace("#", "");
  //       const element = document.getElementById(id);
  //       if (element) {
  //         element.scrollIntoView();
  //       }
  //     }, 0);
  //   }
  // }, [pathname, hash, key]); // do this on route change
  return (
    // <Router>
    <>
      <Nav />
      <Intro />
      <ProjectContainer />     
      <CodingChallenges />
      <Footer />
    </>
  );
}

export default App;
/* 
 {/* <Routes>
        <Route exact path="/" component={Intro}></Route>
      </Routes>
    </Router> */
