import { useEffect } from "react";
import ProductsData from "../../data/productsData";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NavCurtain.scss";

const NavCurtain = () => {
    const { t } = useTranslation();

    const productsData = ProductsData();

    // FIXME:
    // addEventListener("scroll", () => {
    //     const links1 = document.querySelector(".home");
    //     const links2 = document.querySelector(".about");
    //     const links3 = document.querySelector(".products");
    //     const links4 = document.querySelector(".contacts");
    //     if (
    //         document.querySelector("#section1").getBoundingClientRect().bottom >
    //         200
    //     ) {
    //         links1.classList.add("active-link");
    //         links2.classList.remove("active-link");
    //         links3.classList.remove("active-link");
    //         links4.classList.remove("active-link");
    //     } else if (
    //         document.querySelector("#section2").getBoundingClientRect().bottom >
    //         200
    //     ) {
    //         links1.classList.remove("active-link");
    //         links2.classList.add("active-link");
    //         links3.classList.remove("active-link");
    //         links4.classList.remove("active-link");
    //     } else if (
    //         document.querySelector("#section3").getBoundingClientRect().bottom >
    //         200
    //     ) {
    //         links1.classList.remove("active-link");
    //         links2.classList.remove("active-link");
    //         links3.classList.add("active-link");
    //         links4.classList.remove("active-link");
    //     } else if (
    //         document.querySelector("#section4").getBoundingClientRect().bottom >
    //         200
    //     ) {
    //         links1.classList.remove("active-link");
    //         links2.classList.remove("active-link");
    //         links3.classList.remove("active-link");
    //         links4.classList.add("active-link");
    //     }
    // });

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

    return (
        <>
            <div className="curtain"></div>
            <div className="nav-curtain">
                <ul className="nav-curtain__list">
                    <li>
                        <a className="link js-link active-link" href="#home">
                            {t("footer.home")}
                        </a>
                    </li>
                    <li>
                        <a className="link js-link" href="#about-us">
                            {t("about_us.title")}
                        </a>
                    </li>
                    <li>
                        <div className="nav-curtain__products-link">
                            <a className="link js-link" href="#products">
                                {t("products.title")}
                            </a>
                            <button
                                className="products-btn"
                                onClick={showProducts}
                            >
                                <div className="products-btn__icon">+</div>
                            </button>
                        </div>
                        <div className="nav-curtain__grid-dropdown">
                            <ul className="nav-curtain__dropdown">
                                {productsData.map(({ id, name }) => {
                                    return (
                                        <li key={id}>
                                            <NavLink
                                                className="js-link"
                                                to={`/product-page/${id}`}
                                            >
                                                {name}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a className="link js-link" href="#contacts">
                            {t("contacts.title")}
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default NavCurtain;
