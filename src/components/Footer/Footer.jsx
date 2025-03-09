import { useEffect } from "react";
import { productsData } from "../../data/productsData";
import organicImg from "./../../assets/img/certificates/organic-logo.jpg";
import "./Footer.scss";

const Footer = () => {
    const scrollToTop = () => {
        document.documentElement.scrollTo(0, 0);
    };

    useEffect(() => {
        document.querySelectorAll(".js-dropdown-btn").forEach((btn, index) => {
            btn.addEventListener("click", () => {
                const dropdownBtnIcon = document.querySelectorAll(
                    ".dropdown-btn__icon"
                );
                const gridDropdownWrapper = document.querySelectorAll(
                    ".grid-dropdown__wrapper"
                );
                const dropdownBtn = document.querySelectorAll(".dropdown-btn");
                gridDropdownWrapper[index].classList.toggle(
                    "grid-dropdown__wrapper--active"
                );
                dropdownBtnIcon[index].classList.toggle(
                    "dropdown-btn__icon--active"
                );
                dropdownBtn[index].classList.toggle("dropdown-btn--active");
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
                <a className="footer-logo" href="#section1">
                    Ягода Карпат
                </a>
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
                <ul className="footer-nav">
                    <li>
                        <div className="footer-nav__title dropdown-btn js-dropdown-btn">
                            <p>Навігація</p>
                            <div className="dropdown-btn__icon">+</div>
                        </div>
                        <div className="grid-dropdown__wrapper">
                            <ul className="footer-nav__list grid-dropdown">
                                <li>
                                    <a href="#home">Головна</a>
                                </li>
                                <li>
                                    <a href="#about-us">Про нас</a>
                                </li>
                                <li>
                                    <a href="#products">Продукція</a>
                                </li>
                                <li>
                                    <a href="#contacts">Контакти</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="footer-nav__title dropdown-btn js-dropdown-btn">
                            <p>Ягоди</p>
                            <div className="dropdown-btn__icon">+</div>
                        </div>
                        <div className="grid-dropdown__wrapper">
                            <ul className="footer-nav__list grid-dropdown">
                                {productsData
                                    .filter((product) => {
                                        return product.type == "berry";
                                    })
                                    .map((product) => {
                                        return (
                                            <li key={product.id}>
                                                <a href={"#" + product.id}>
                                                    {product.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="footer-nav__title dropdown-btn js-dropdown-btn">
                            <p>Фрукти</p>
                            <div className="dropdown-btn__icon">+</div>
                        </div>
                        <div className="grid-dropdown__wrapper">
                            <ul className="footer-nav__list grid-dropdown">
                                {productsData
                                    .filter((product) => {
                                        return product.type == "fruit";
                                    })
                                    .map((product) => {
                                        return (
                                            <li key={product.id}>
                                                <a href={"#" + product.id}>
                                                    {product.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="footer-nav__title dropdown-btn js-dropdown-btn">
                            <p>Овочі</p>
                            <div className="dropdown-btn__icon">+</div>
                        </div>
                        <div className="grid-dropdown__wrapper">
                            <ul className="footer-nav__list grid-dropdown">
                                {productsData
                                    .filter((product) => {
                                        return product.type == "vegetable";
                                    })
                                    .map((product) => {
                                        return (
                                            <li key={product.id}>
                                                <a href={"#" + product.id}>
                                                    {product.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="footer-nav__title dropdown-btn js-dropdown-btn">
                            <p>Гриби</p>
                            <div className="dropdown-btn__icon">+</div>
                        </div>
                        <div className="grid-dropdown__wrapper">
                            <ul className="footer-nav__list grid-dropdown">
                                {productsData
                                    .filter((product) => {
                                        return product.type == "mushroom";
                                    })
                                    .map((product) => {
                                        return (
                                            <li key={product.id}>
                                                <a href={"#" + product.id}>
                                                    {product.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className="footer__bottom">
                    <p>
                        © 2024 - {new Date().getFullYear()} Ягода Карпат. Всі
                        права захищені.
                    </p>
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
