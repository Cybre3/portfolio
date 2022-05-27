import PortfolioConatiner from "./PortfolioContainer/PortfolioConatiner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <PortfolioConatiner />
    </div>
  );
}

export default App;