import PageTitle from "../PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./AboutUs.scss";

const AboutUs = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.querySelectorAll(".stats-card").forEach((card, index) => {
            let isActivated = false;
            document.addEventListener("scroll", () => {
                const cardRect = card.getBoundingClientRect().top;
                const counter = document.querySelectorAll(".counter");
                if (cardRect < window.innerHeight - 25) {
                    if (!isActivated) {
                        let startValue = 0;
                        function start() {
                            setTimeout(() => {
                                if (startValue < counter[index].dataset.value) {
                                    startValue += 1;
                                    counter[index].textContent = startValue;
                                    counter[2].textContent = startValue + "+";
                                    start();
                                }
                            }, 50);
                        }
                        start();
                    }
                    isActivated = true;
                }
            });
        });
    }, []);

    return (
        <div className="about-us js-about-us" id="about-us">
            <PageTitle name={t("about_us_title")} />
            <h3 className="about-us__sec-info">{t("about_us.sec_title")}</h3>
            <div className="about-us__stats">
                <div className="stats-card">
                    <p className="counter" data-value="15">
                        0
                    </p>
                    <p>{t("about_us.year")}</p>
                </div>
                <div className="stats-card">
                    <p className="counter" data-value="18">
                        0
                    </p>
                    <p>{t("about_us.product")}</p>
                </div>
                <div className="stats-card">
                    <p className="counter" data-value="30">
                        0
                    </p>
                    <p>{t("about_us.volume")}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
