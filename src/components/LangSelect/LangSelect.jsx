import { useEffect } from "react";
import "./LangSelect.scss";
import i18n from "i18next";

const LangSelect = () => {
    const getStorage = () => {
        return localStorage.getItem("i18nextLng") || "ua";
    };

    useEffect(() => {
        const handleLanguage = (lng) => {
            i18n.changeLanguage(lng);
            getStorage();
        };

        const selectBtn = document.querySelector(".lang-select__btn");
        const langSelectOptions = document.querySelectorAll(
            ".lang-select__option"
        );
        const selectInput = document.querySelector(".lang-select__input");

        selectBtn.addEventListener("click", (e) => {
            e.preventDefault();
            document
                .querySelector(".lang-select__dd")
                .classList.toggle("lang-select__dd--active");
            selectBtn.classList.toggle("lang-select__btn--active");
        });

        langSelectOptions.forEach((option) => {
            if (option.dataset.value === getStorage()) {
                option.classList.add("lang-select__option--active");
            }
            option.addEventListener("click", (e) => {
                e.stopPropagation();
                for (let i = 0; i < langSelectOptions.length; i++) {
                    langSelectOptions[i].classList.remove(
                        "lang-select__option--active"
                    );
                }
                selectBtn.innerHTML = option.innerHTML;
                handleLanguage(option.dataset.value);
                selectBtn.classList.remove("lang-select__btn--active");
                document
                    .querySelector(".lang-select__dd")
                    .classList.remove("lang-select__dd--active");
                if (option.dataset.value === getStorage()) {
                    option.classList.add("lang-select__option--active");
                }
            });
        });

        document.addEventListener("scroll", () => {
            selectBtn.classList.remove("lang-select__btn--active");
            document
                .querySelector(".lang-select__dd")
                .classList.remove("lang-select__dd--active");
        });

        document.addEventListener("click", (e) => {
            if (e.target !== selectBtn) {
                document
                    .querySelector(".lang-select__dd")
                    .classList.remove("lang-select__dd--active");
                selectBtn.classList.remove("lang-select__btn--active");
            }
        });

        const lngSelectBtn = (code = "UA", name = "Українська") => {
            return `<span>${code}</span><span>-</span><span>${name}</span>`;
        };

        switch (getStorage()) {
            case "ua":
                document.querySelector(".lang-select__btn").innerHTML =
                    lngSelectBtn("UA", "Українська");
                break;
            case "en":
                document.querySelector(".lang-select__btn").innerHTML =
                    lngSelectBtn("EN", "English");
                break;
        }
    }, []);

    const inactiveLngOption = "lang-select__option";
    const activeLngOption = "lang-select__option lang-select__option--active";
    return (
        <>
            <div className="lang-select">
                <div className="lang-select__btn"></div>
                <ul className="lang-select__dd">
                    <li className={inactiveLngOption} data-value="ua">
                        <span>UA</span>
                        <span>-</span>
                        <span>Українська</span>
                    </li>
                    <li className={inactiveLngOption} data-value="en">
                        <span>EN</span>
                        <span>-</span>
                        <span>English</span>
                    </li>
                    <li className={inactiveLngOption} data-value="cz">
                        <span>CZ</span>
                        <span>-</span>
                        <span>Cesky</span>
                    </li>
                    <li className={inactiveLngOption} data-value="pl">
                        <span>PL</span>
                        <span>-</span>
                        <span>Polska</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default LangSelect;
