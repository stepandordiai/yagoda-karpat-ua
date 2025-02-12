import { productsData } from "../../data/productsData";
import "./Home.scss";

const Home = () => {
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
        <div className="home js-home-container" id="home">
            <div className="home-container__wrapper">
                <div>
                    <h1 className="home-main-info">
                        Оптовий виробник замороженик та сушених продуктів
                    </h1>
                    <p className="home-info">
                        Ми виробляємо заморожені та сушені ягоди, фрукти, гриби
                        та овочі
                    </p>
                </div>
                <a className="home-contact-us-btn" href="#section4">
                    Зв'яжіться з нами
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
    );
};

export default Home;
