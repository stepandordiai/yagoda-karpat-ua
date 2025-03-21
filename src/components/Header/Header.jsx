import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { HashLink } from "react-router-hash-link";
import logo from "./../../assets/yagoda-karpat-logo.svg";
import "./Header.scss";
import LangSelect from "../LangSelect/LangSelect";

const Header = () => {
    let lastScrollTop = 0;
    addEventListener("scroll", () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > window.innerHeight) {
            document.querySelector(".header").classList.add("header--hide");
        } else {
            document.querySelector(".header").classList.remove("header--hide");
        }
        lastScrollTop = scrollTop;
    });

    return (
        <header className="header">
            <HashLink to={"/#home"} className="header__logo">
                <img width={30} src={logo} alt="Logo" />
                <span>Ягода Карпат</span>
            </HashLink>
            <LangSelect />
            <a className="header__tel" href="tel:+380968065513">
                +38 096 806 55 13
            </a>
            <BurgerBtn />
        </header>
    );
};

export default Header;
