import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";

function RouterPortfolio() {
  return (
    <div>
      <Router>
        <Header />
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default RouterPortfolio;
