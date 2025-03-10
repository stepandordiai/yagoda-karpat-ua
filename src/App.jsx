import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import Loading from "./components/Loading/Loading";
import NavCurtain from "./components/NavCurtain/NavCurtain";
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import AboutUs from "./pages/AboutUs/AboutUs";
import "./App.scss";

function App() {
    return (
        <>
            {/* <Loading /> */}
            <Header />
            <NavCurtain />
            <Home />
            <AboutUs />
            <Products />
            <Contacts />
            <Footer />
        </>
    );
}

export default App;
