import Contacts from "./../../components/Contacts/Contacts";
import Products from "./../../components/Products/Products";
import AboutUs from "./../../components/AboutUs/AboutUs";
// import { productsData } from "../../data/productsData";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Home.scss";

const Home = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = "Ягода Карпат";
    }, []);
    // addEventListener("scroll", () => {
    //     const homeContainer = document.querySelector(".js-home-container");

    //     let homeContainerRect = homeContainer.getBoundingClientRect().bottom;
    //     if (homeContainerRect < 0) {
    //         document.querySelector(".header").classList.add("header--active");
    //         document
    //             .querySelector(".burger-btn")
    //             .classList.add("burger-btn--translate");
    //     } else {
    //         document
    //             .querySelector(".header")
    //             .classList.remove("header--active");
    //         document
    //             .querySelector(".burger-btn")
    //             .classList.remove("burger-btn--translate");
    //     }
    // });

    return (
        <>
            <div className="home js-home-container" id="home">
                <div className="home-container__wrapper">
                    <div>
                        <h1 className="home-main-info">{t("home.title")}</h1>
                        <p className="home-info">{t("home.sec_title")}</p>
                    </div>
                    <img
                        className="home-container__img"
                        src={
                            "https://img.freepik.com/free-photo/frozen-mixed-berry_1339-7845.jpg?t=st=1740245971~exp=1740249571~hmac=6e552ffd5c3c25e585266730dd9ce194588861bc437c2bf4bab39fbaa7de64e4&w=1380"
                        }
                        alt=""
                    />
                    <a className="home-contact-us-btn" href="#contacts">
                        {t("contact_us")}
                    </a>
                    {/* <div className="home-container__product-wrapper">
                    {productsData.map((product) => {
                        return (
                            <a
                                className={product.imgNone}
                                key={product.id}
                                href={"#" + product.id}
                                data-title={product.name}
                            >
                                <img
                                    className={product.imgNone}
                                    loading="lazy"
                                    src={product.icon}
                                    alt={product.name}
                                />
                            </a>
                        );
                    })}
                </div> */}
                </div>
            </div>
            <AboutUs />
            <Products />
            <Contacts />
        </>
    );
};

export default Home;
