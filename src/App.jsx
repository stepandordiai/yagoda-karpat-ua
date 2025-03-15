import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import Loading from "./components/Loading/Loading";
import NavCurtain from "./components/NavCurtain/NavCurtain";

import Home from "./pages/Home/Home";

import "./App.scss";
import ProductPage from "./pages/ProductPage/ProductPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
    return (
        <Router>
            <ScrollToTop />
            {/* <Loading /> */}
            <Header />
            <NavCurtain />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product-page/:id" element={<ProductPage />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
