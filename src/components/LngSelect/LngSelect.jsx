import { useEffect } from "react";
import i18n from "i18next";
import "./LngSelect.scss";

const LngSelect = () => {
    const getStorage = () => {
        return localStorage.getItem("i18nextLng") || "uk";
    };

    useEffect(() => {
        const handleLanguage = (lng) => {
            i18n.changeLanguage(lng);
            getStorage();
        };

        const selectBtn = document.querySelector(".lng-select__btn");
        const langSelectOptions = document.querySelectorAll(
            ".lng-select__option"
        );

        selectBtn.addEventListener("click", (e) => {
            e.preventDefault();
            document
                .querySelector(".lng-select__dd")
                .classList.toggle("lng-select__dd--active");
            selectBtn.classList.toggle("lng-select__btn--active");
        });

        langSelectOptions.forEach((option) => {
            if (option.dataset.value === getStorage()) {
                option.classList.add("lng-select__option--active");
            }
            option.addEventListener("click", (e) => {
                e.stopPropagation();
                for (let i = 0; i < langSelectOptions.length; i++) {
                    langSelectOptions[i].classList.remove(
                        "lng-select__option--active"
                    );
                }
                selectBtn.innerHTML = option.innerHTML;
                handleLanguage(option.dataset.value);
                selectBtn.classList.remove("lng-select__btn--active");
                document
                    .querySelector(".lng-select__dd")
                    .classList.remove("lng-select__dd--active");
                if (option.dataset.value === getStorage()) {
                    option.classList.add("lng-select__option--active");
                }
            });
        });

        document.addEventListener("scroll", () => {
            selectBtn.classList.remove("lng-select__btn--active");
            document
                .querySelector(".lng-select__dd")
                .classList.remove("lng-select__dd--active");
        });

        document.addEventListener("click", (e) => {
            if (e.target !== selectBtn) {
                document
                    .querySelector(".lng-select__dd")
                    .classList.remove("lng-select__dd--active");
                selectBtn.classList.remove("lng-select__btn--active");
            }
        });

        const lngSelectBtn = (code = "UA", name = "Українська") => {
            return `<span>${code}</span><span> - </span><span>${name}</span>`;
        };

        switch (getStorage()) {
            case "uk":
                document.querySelector(".lng-select__btn").innerHTML =
                    lngSelectBtn("UA", "Українська");
                break;
            case "en":
                document.querySelector(".lng-select__btn").innerHTML =
                    lngSelectBtn("EN", "English");
                break;
            case "cs":
                document.querySelector(".lng-select__btn").innerHTML =
                    lngSelectBtn("CZ", "Čeština");
                break;
        }
    }, []);

    return (
        <div className="lng-select">
            <button className="lng-select__btn">
                <span>UA</span>
                <span> - </span>
                <span>Українська</span>
            </button>
            <ul className="lng-select__dd">
                <li className="lng-select__option" data-value="uk">
                    <span>UA</span>
                    <span> - </span>
                    <span>Українська</span>
                </li>
                <li className="lng-select__option" data-value="en">
                    <span>EN</span>
                    <span> - </span>
                    <span>English</span>
                </li>
                <li className="lng-select__option" data-value="cs">
                    <span>CZ</span>
                    <span> - </span>
                    <span>Čeština</span>
                </li>
            </ul>
        </div>
    );
};

export default LngSelect;
