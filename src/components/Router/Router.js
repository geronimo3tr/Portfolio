import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import MainPage from "../../pages/MainPage/MainPage";

function RouterPortfolio() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/Portfolio" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default RouterPortfolio;
