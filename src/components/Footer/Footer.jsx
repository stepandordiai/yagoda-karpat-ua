import { useEffect } from "react";
import { productsData } from "../../data/productsData";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import organicImg from "./../../assets/img/certificates/organic-logo.jpg";
import "./Footer.scss";

const Footer = () => {
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
                    <p className="certificates-info">Наші сертифікати</p>
                    <div className="certificates">
                        <img
                            width={100}
                            loading="lazy"
                            src={organicImg}
                            alt="Organic Certificate"
                        />
                        <p style={{ fontSize: "2rem", fontWeight: "700" }}>
                            HACCP
                        </p>
                    </div>
                </div>
                <div className="footer-nav">
                    <div>
                        <div className="footer-nav__title dropdown-btn js-dropdown-btn">
                            <p>Навігація</p>
                            <div className="dropdown-btn__icon">+</div>
                        </div>
                        <div className="grid-dropdown__wrapper">
                            <ul className="footer-nav__list grid-dropdown">
                                <li>
                                    <HashLink
                                        className="js-footer__link"
                                        to="/#home"
                                    >
                                        Головна
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink
                                        className="js-footer__link"
                                        to="/#about-us"
                                    >
                                        Про нас
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink
                                        className="js-footer__link"
                                        to="/#products"
                                    >
                                        Продукція
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink
                                        className="js-footer__link"
                                        to="/#contacts"
                                    >
                                        Контакти
                                    </HashLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="footer-nav__title dropdown-btn js-dropdown-btn">
                            <p>Ягоди</p>
                            <div className="dropdown-btn__icon">+</div>
                        </div>
                        <div className="grid-dropdown__wrapper">
                            <ul className="footer-nav__list grid-dropdown">
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
                    <div>
                        <div className="footer-nav__title dropdown-btn js-dropdown-btn">
                            <p>Фрукти</p>
                            <div className="dropdown-btn__icon">+</div>
                        </div>
                        <div className="grid-dropdown__wrapper">
                            <ul className="footer-nav__list grid-dropdown">
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
                    <div>
                        <div className="footer-nav__title dropdown-btn js-dropdown-btn">
                            <p>Овочі</p>
                            <div className="dropdown-btn__icon">+</div>
                        </div>
                        <div className="grid-dropdown__wrapper">
                            <ul className="footer-nav__list grid-dropdown">
                                {productsData
                                    .filter((product) => {
                                        return product.type === "vegetable";
                                    })
                                    .map(({ id, name }) => {
                                        return (
                                            <li key={id}>
                                                <a
                                                    className="js-footer__link"
                                                    to={`/product-page/${id}`}
                                                >
                                                    {name}
                                                </a>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="footer-nav__title dropdown-btn js-dropdown-btn">
                            <p>Гриби</p>
                            <div className="dropdown-btn__icon">+</div>
                        </div>
                        <div className="grid-dropdown__wrapper">
                            <ul className="footer-nav__list grid-dropdown">
                                {productsData
                                    .filter((product) => {
                                        return product.type === "mushroom";
                                    })
                                    .map(({ id, name }) => {
                                        return (
                                            <li key={id}>
                                                <a
                                                    className="js-footer__link"
                                                    to={`/product-page/${id}`}
                                                >
                                                    {name}
                                                </a>
                                            </li>
                                        );
                                    })}
                            </ul>
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
