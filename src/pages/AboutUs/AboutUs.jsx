import { useEffect } from "react";
import map from "/ukraine.svg";
import "./AboutUs.scss";
import PageTitle from "../../components/PageTitle/PageTitle";

const AboutUs = () => {
    useEffect(() => {
        addEventListener("scroll", () => {
            if (
                document.getElementById("years").getBoundingClientRect().top <
                window.innerHeight
            ) {
                closureYears("years", 15);
            }
            if (
                document.getElementById("products-js").getBoundingClientRect()
                    .top < window.innerHeight
            ) {
                closureYears1("products-js", 14);
            }
            if (
                document.getElementById("amount").getBoundingClientRect().top <
                window.innerHeight
            ) {
                closureYears2("amount");
            }
        });
    }, []);

    let started = false;
    function closureYears(param, quantity) {
        if (!started) {
            let score = 0;
            let id = setInterval(closureInner, 100);
            function closureInner() {
                if (score === quantity) {
                    clearInterval(id);
                } else {
                    score++;
                    document.getElementById(param).innerHTML = score;
                }
            }
        }

        started = true;
    }

    let started1 = false;

    function closureYears1(param, quantity) {
        if (!started1) {
            let score = 0;
            let id = setInterval(closureInner, 100);
            function closureInner() {
                if (score === quantity) {
                    clearInterval(id);
                } else {
                    score++;
                    document.getElementById(param).innerHTML = score;
                }
            }
        }

        started1 = true;
    }

    let started2 = false;

    function closureYears2(param) {
        if (!started2) {
            let score = 0;
            let id = setInterval(closureInner, 10);
            function closureInner() {
                if (score === 350) {
                    clearInterval(id);
                    let id2 = setInterval(closureInner2, 50);
                    function closureInner2() {
                        if (score === 400) {
                            clearInterval(id2);
                        } else {
                            score++;
                            document.getElementById(param).innerHTML = score;
                        }
                    }
                } else {
                    score++;
                    document.getElementById(param).innerHTML = score;
                }
            }
        }

        started2 = true;
    }
    return (
        <div className="about-us" id="about-us">
            <PageTitle name="Про нас" />
            <p className="about-info">
                Компанія Ягода Карпат спеціалізується на переробці та
                виробництві заморожених та сушених ягід, фруктів, грибів та
                овочів. Вся наша продукція вирощена та зібрана виключно в
                екологічно чистих районах України.
            </p>
            <img className="ukraine-map" loading="lazy" src={map} alt="map" />
            <div className="contacts-grid-container">
                <div>
                    <span id="years">0</span>
                    <p>Років досвіду</p>
                </div>
                <div>
                    <span id="products-js">0</span>
                    <p>Продуктів</p>
                </div>
                <div>
                    <span id="amount">0</span>
                    <p>Об'єм продукції за сезон</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
