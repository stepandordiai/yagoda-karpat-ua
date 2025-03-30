import { useEffect } from "react";
// import { productsData } from "../../data/productsData";
import ProductsData from "../../data/productsData";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import organicImg from "./../../assets/img/certificates/organic-logo.jpg";
import { useTranslation } from "react-i18next";
import "./Footer.scss";

const Footer = () => {
    const { t } = useTranslation();

    const productsData = ProductsData();

    const scrollToTop = () => {
        document.documentElement.scrollTo(0, 0);
    };

    useEffect(() => {
        const dropdownBtnIcon = document.querySelectorAll(
            ".dropdown-btn__icon"
        );
        const gridDropdownWrapper = document.querySelectorAll(
            ".grid-dropdown__wrapper"
        );
        const dropdownBtn = document.querySelectorAll(".dropdown-btn");

        document.querySelectorAll(".js-dropdown-btn").forEach((btn, index) => {
            btn.addEventListener("click", () => {
                gridDropdownWrapper[index].classList.toggle(
                    "grid-dropdown__wrapper--active"
                );
                dropdownBtnIcon[index].classList.toggle(
                    "dropdown-btn__icon--active"
                );
                dropdownBtn[index].classList.toggle("dropdown-btn--active");
            });
        });

        document.querySelectorAll(".js-footer__link").forEach((link) => {
            link.addEventListener("click", () => {
                gridDropdownWrapper.forEach((wrapper) => {
                    wrapper.classList.remove("grid-dropdown__wrapper--active");
                });
                dropdownBtnIcon.forEach((icon) => {
                    icon.classList.remove("dropdown-btn__icon--active");
                });
                dropdownBtn.forEach((btn) => {
                    btn.classList.remove("dropdown-btn--active");
                });
            });
        });
    }, []);

    return (
        <footer className="footer">
            <div className="footer-top"></div>
            <div className="to-top-btn" onClick={scrollToTop}>
                <i className="fa-solid fa-arrow-up"></i>
            </div>
            <div className="footer-details">
                <HashLink className="footer-logo" to="/#home">
                    Ягода Карпат
                </HashLink>
                <div>
                    <h3 className="certificates-info">
                        {t("footer.our_certificates")}
                    </h3>
                    <div className="certificates">
                        <img
                            width={100}
                            loading="lazy"
                            src={organicImg}
                            alt="Organic Certificate"
                        />
                        <p style={{ fontSize: "2rem", fontWeight: "600" }}>
                            HACCP
                        </p>
                    </div>
                </div>
                <div className="footer-nav">
                    <div>
                        <div className="footer-nav__title dropdown-btn js-dropdown-btn">
                            <p>{t("footer.navigation")}</p>
                            <div className="dropdown-btn__icon">+</div>
                        </div>
                        <div className="grid-dropdown__wrapper">
                            <div className="grid-dropdown">
                                <ul className="footer-nav__list">
                                    <li>
                                        <HashLink
                                            className="js-footer__link"
                                            to="/#home"
                                        >
                                            {t("footer.home")}
                                        </HashLink>
                                    </li>
                                    <li>
                                        <HashLink
                                            className="js-footer__link"
                                            to="/#about-us"
                                        >
                                            {t("about_us.title")}
                                        </HashLink>
                                    </li>
                                    <li>
                                        <HashLink
                                            className="js-footer__link"
                                            to="/#products"
                                        >
                                            {t("products.title")}
                                        </HashLink>
                                    </li>
                                    <li>
                                        <HashLink
                                            className="js-footer__link"
                                            to="/#contacts"
                                        >
                                            {t("contacts.title")}
                                        </HashLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="footer-nav__title dropdown-btn js-dropdown-btn">
                            <p>{t("footer.berries")}</p>
                            <div className="dropdown-btn__icon">+</div>
                        </div>
                        <div className="grid-dropdown__wrapper">
                            <div className="grid-dropdown">
                                <ul className="footer-nav__list">
                                    {productsData
                                        .filter((product) => {
                                            return product.type === "berry";
                                        })
                                        .map(({ id, name }) => {
                                            return (
                                                <li key={id}>
                                                    <NavLink
                                                        className="js-footer__link"
                                                        to={`/product-page/${id}`}
                                                    >
                                                        {name}
                                                    </NavLink>
                                                </li>
                                            );
                                        })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="footer-nav__title dropdown-btn js-dropdown-btn">
                            <p>{t("footer.fruits")}</p>
                            <div className="dropdown-btn__icon">+</div>
                        </div>
                        <div className="grid-dropdown__wrapper">
                            <div className="grid-dropdown">
                                <ul className="footer-nav__list">
                                    {productsData
                                        .filter((product) => {
                                            return product.type === "fruit";
                                        })
                                        .map(({ id, name }) => {
                                            return (
                                                <li key={id}>
                                                    <NavLink
                                                        className="js-footer__link"
                                                        to={`/product-page/${id}`}
                                                    >
                                                        {name}
                                                    </NavLink>
                                                </li>
                                            );
                                        })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="footer-nav__title dropdown-btn js-dropdown-btn">
                            <p>{t("footer.mushrooms")}</p>
                            <div className="dropdown-btn__icon">+</div>
                        </div>
                        <div className="grid-dropdown__wrapper">
                            <div className="grid-dropdown">
                                <ul className="footer-nav__list">
                                    {productsData
                                        .filter((product) => {
                                            return product.type === "mushroom";
                                        })
                                        .map(({ id, name }) => {
                                            return (
                                                <li key={id}>
                                                    <NavLink
                                                        className="js-footer__link"
                                                        to={`/product-page/${id}`}
                                                    >
                                                        {name}
                                                    </NavLink>
                                                </li>
                                            );
                                        })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="footer-nav__title dropdown-btn js-dropdown-btn">
                            <p>{t("footer.vegetables")}</p>
                            <div className="dropdown-btn__icon">+</div>
                        </div>
                        <div className="grid-dropdown__wrapper">
                            <div className="grid-dropdown">
                                <ul className="footer-nav__list">
                                    {productsData
                                        .filter((product) => {
                                            return product.type === "vegetable";
                                        })
                                        .map(({ id, name }) => {
                                            return (
                                                <li key={id}>
                                                    <NavLink
                                                        className="js-footer__link"
                                                        to={`/product-page/${id}`}
                                                    >
                                                        {name}
                                                    </NavLink>
                                                </li>
                                            );
                                        })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>© Ягода Карпат 2025. Всі права захищені.</p>
                    <p>
                        Made with love by{" "}
                        <a
                            className="creator-link"
                            href="https://stepandordiai.netlify.app/"
                            target="_blank"
                        >
                            Stepan Dordiai
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
