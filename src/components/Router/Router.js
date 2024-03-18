import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function RouterPortfolio() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/Portfolio" element={<MainPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default RouterPortfolio;
