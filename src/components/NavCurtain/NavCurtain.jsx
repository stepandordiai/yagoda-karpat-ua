import { useEffect } from "react";
import ProductsData from "../../data/productsData";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import "./NavCurtain.scss";

const NavCurtain = () => {
    const { t } = useTranslation();

    const productsData = ProductsData();

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const links = document.querySelectorAll(".link");
            const home = document.querySelector(".js-home");
            const aboutUs = document.querySelector(".js-about-us");
            const products = document.querySelector(".js-products");
            const contacts = document.querySelector(".js-contacts");
            if (home || aboutUs || products || contacts) {
                const homeRect = home.getBoundingClientRect();
                const aboutUsRect = aboutUs.getBoundingClientRect();
                const productsRect = products.getBoundingClientRect();
                const contactsRect = contacts.getBoundingClientRect();
                for (let i = 0; i < links.length; i++) {
                    links[i].classList.remove("link--active");

                    // TODO: 40 is a half of a header, it is working properly when i specify like that
                    if (homeRect.top <= 40 && homeRect.bottom >= 40) {
                        links[0].classList.add("link--active");
                    }
                    if (aboutUsRect.top <= 40 && aboutUsRect.bottom >= 40) {
                        links[1].classList.add("link--active");
                    }
                    if (productsRect.top <= 40 && productsRect.bottom >= 40) {
                        links[2].classList.add("link--active");
                    }
                    if (contactsRect.top <= 40 && contactsRect.bottom >= 40) {
                        links[3].classList.add("link--active");
                    }
                }
            }
        });
    }, []);

    function showProducts() {
        document
            .querySelector(".nav-curtain__grid-dropdown")
            .classList.toggle("nav-curtain__grid-dropdown--active");
        document
            .querySelector(".products-btn")
            .classList.toggle("products-btn--active");
        document
            .querySelector(".products-btn__icon")
            .classList.toggle("products-btn__icon--active");
    }

    useEffect(() => {
        document.querySelectorAll(".js-link").forEach((link) => {
            link.addEventListener("click", () => {
                const burgerBtn = document.querySelector(".burger-btn");
                const midLine = document.querySelector(
                    ".burger-btn__center-line"
                );
                const mobileMenu = document.querySelector(".nav-curtain");
                burgerBtn.classList.remove("burger-btn--active");
                midLine.classList.remove("burger-btn__center-line--active");
                mobileMenu.classList.remove("nav-curtain--active");
                document
                    .querySelector(".curtain")
                    .classList.remove("curtain--active");

                // hide list of products in menu by clicking menu btn
                document
                    .querySelector(".nav-curtain__grid-dropdown")
                    .classList.remove("nav-curtain__grid-dropdown--active");
                document
                    .querySelector(".products-btn")
                    .classList.remove("products-btn--active");
                document
                    .querySelector(".products-btn__icon")
                    .classList.remove("products-btn__icon--active");
                document.body.classList.remove("body--hidden");
            });
        });
    }, []);

    const inactiveLink = "js-link";
    const activeLink = "js-link product-link--active";

    return (
        <>
            <div className="curtain"></div>
            <div className="nav-curtain">
                <ul className="nav-curtain__list">
                    <li>
                        <HashLink
                            className="link js-link link--active"
                            to={"/#home"}
                        >
                            {t("home_title")}
                        </HashLink>
                    </li>
                    <li>
                        <HashLink className="link js-link" to={"/#about-us"}>
                            {t("about_us_title")}
                        </HashLink>
                    </li>
                    <li>
                        <div className="nav-curtain__products-link">
                            <HashLink
                                className="link js-link"
                                to={"/#products"}
                            >
                                {t("products_title")}
                            </HashLink>
                            <button
                                className="products-btn"
                                onClick={showProducts}
                            >
                                <div className="products-btn__icon">+</div>
                            </button>
                        </div>
                        <div className="nav-curtain__grid-dropdown">
                            <div className="nav-curtain__dropdown">
                                <div className="nav-curtain__inner-dd">
                                    <div>
                                        <p className="nav-curtain__sec-title">
                                            Berries
                                        </p>
                                        <ul className="nav-curtain__products-list">
                                            {productsData
                                                .filter(
                                                    (product) =>
                                                        product.type == "berry"
                                                )
                                                .map(({ id, name }) => {
                                                    return (
                                                        <li key={id}>
                                                            <NavLink
                                                                className={({
                                                                    isActive,
                                                                }) =>
                                                                    isActive
                                                                        ? activeLink
                                                                        : inactiveLink
                                                                }
                                                                to={`/product-page/${id}`}
                                                            >
                                                                {name}
                                                            </NavLink>
                                                        </li>
                                                    );
                                                })}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="nav-curtain__sec-title">
                                            Fruits
                                        </p>
                                        <ul className="nav-curtain__products-list">
                                            {productsData
                                                .filter(
                                                    (product) =>
                                                        product.type == "fruit"
                                                )
                                                .map(({ id, name }) => {
                                                    return (
                                                        <li key={id}>
                                                            <NavLink
                                                                className={({
                                                                    isActive,
                                                                }) =>
                                                                    isActive
                                                                        ? activeLink
                                                                        : inactiveLink
                                                                }
                                                                to={`/product-page/${id}`}
                                                            >
                                                                {name}
                                                            </NavLink>
                                                        </li>
                                                    );
                                                })}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="nav-curtain__sec-title">
                                            Mushrooms
                                        </p>
                                        <ul className="nav-curtain__products-list">
                                            {productsData
                                                .filter(
                                                    (product) =>
                                                        product.type ==
                                                        "mushroom"
                                                )
                                                .map(({ id, name }) => {
                                                    return (
                                                        <li key={id}>
                                                            <NavLink
                                                                className={({
                                                                    isActive,
                                                                }) =>
                                                                    isActive
                                                                        ? activeLink
                                                                        : inactiveLink
                                                                }
                                                                to={`/product-page/${id}`}
                                                            >
                                                                {name}
                                                            </NavLink>
                                                        </li>
                                                    );
                                                })}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="nav-curtain__sec-title">
                                            Vegetables
                                        </p>
                                        <ul className="nav-curtain__products-list">
                                            {productsData
                                                .filter(
                                                    (product) =>
                                                        product.type ==
                                                        "vegetable"
                                                )
                                                .map(({ id, name }) => {
                                                    return (
                                                        <li key={id}>
                                                            <NavLink
                                                                className={({
                                                                    isActive,
                                                                }) =>
                                                                    isActive
                                                                        ? activeLink
                                                                        : inactiveLink
                                                                }
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
                    </li>
                    <li>
                        <HashLink className="link js-link" to={"/#contacts"}>
                            {t("contacts_title")}
                        </HashLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default NavCurtain;
