import BurgerBtn from "../BurgerBtn/BurgerBtn";
import logo from "./../../assets/yagoda-karpat-ua-logo.svg";
import "./Header.scss";

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
            <a className="header__logo" href="#home">
                <img width={30} src={logo} alt="Logo" />
                <span>Ягода Карпат</span>
            </a>
            <BurgerBtn />
        </header>
    );
};

export default Header;
