import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import Error from "../../pages/Error/Error";

function RouterPortfolio() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Portfolio" element={<MainPage />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default RouterPortfolio;
