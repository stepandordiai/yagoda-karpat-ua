import PageTitle from "../PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import ProductsData from "../../data/productsData";
import "./Contacts.scss";

const Contacts = () => {
    const { t } = useTranslation();

    const productsData = ProductsData();

    return (
        <>
            <div className="contacts-container">
                <PageTitle name={t("contacts_title")} id={"contacts"} />
                <div className="contacts-icons-container">
                    <a href="tel:+380968065513" className="icon-container">
                        <i className="fa-solid fa-phone"></i>
                        <span>+38 (096) 806 55 13</span>
                    </a>
                    <a
                        href="mailto:dordyaysberries@gmail.com"
                        className="icon-container"
                    >
                        <i className="fa-solid fa-envelope"></i>
                        <span>info@yagodakarpat.com</span>
                    </a>
                    <a
                        className="icon-container"
                        href="https://maps.app.goo.gl/U8hieofkGSuBgP7R9"
                        target="_blank"
                    >
                        <i className="fa-solid fa-location-dot"></i>
                        <span>{t("contacts.address")}</span>
                    </a>
                </div>
            </div>
            <div className="form-map-container">
                <form
                    className="form"
                    action="mailto:info@yagodakarpat.com"
                    method="post"
                    encType="text/plain"
                >
                    <h2 className="form__title">
                        {t("contacts.contact_us_title")}
                    </h2>
                    <div className="input-container">
                        <label className="contact-label" htmlFor="first-name">
                            {t("contacts.first_name")}
                        </label>
                        <input
                            className="form__input"
                            id="first-name"
                            name="First name"
                            type="text"
                        />
                    </div>
                    <div className="input-container">
                        <label className="contact-label" htmlFor="last-name">
                            {t("contacts.last_name")}
                        </label>
                        <input
                            className="form__input"
                            id="last-name"
                            name="Last name"
                            type="text"
                        />
                    </div>
                    <div className="input-container">
                        <label className="contact-label" htmlFor="phone-number">
                            {t("contacts.tel")}
                        </label>
                        <input
                            className="form__input"
                            id="phone-number"
                            name="Phone number"
                            type="tel"
                        />
                    </div>
                    <div className="checkbox-container">
                        <p className="checkbox-title">
                            {t("contacts.checkbox_title")}
                        </p>
                        <div>
                            <p className="checkbox-sec-title">
                                {t("berries_title")}
                            </p>
                            <ul>
                                {productsData
                                    .filter(
                                        (product) => product.type == "berry"
                                    )
                                    .map((product) => {
                                        return (
                                            <li
                                                className="checkbox-item"
                                                key={product.id}
                                            >
                                                <input
                                                    type="checkbox"
                                                    name={product.name}
                                                    id={product.id}
                                                />
                                                <label htmlFor={product.id}>
                                                    {product.name}
                                                </label>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                        <div>
                            <p className="checkbox-sec-title">
                                {t("fruits_title")}
                            </p>
                            <ul>
                                {productsData
                                    .filter(
                                        (product) => product.type == "fruit"
                                    )
                                    .map((product) => {
                                        return (
                                            <li
                                                className="checkbox-item"
                                                key={product.id}
                                            >
                                                <input
                                                    type="checkbox"
                                                    name={product.name}
                                                    id={product.id}
                                                />
                                                <label htmlFor={product.id}>
                                                    {product.name}
                                                </label>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                        <div>
                            <p className="checkbox-sec-title">
                                {t("mushrooms_title")}
                            </p>
                            <ul>
                                {productsData
                                    .filter(
                                        (product) => product.type == "mushroom"
                                    )
                                    .map((product) => {
                                        return (
                                            <li
                                                className="checkbox-item"
                                                key={product.id}
                                            >
                                                <input
                                                    type="checkbox"
                                                    name={product.name}
                                                    id={product.id}
                                                />
                                                <label htmlFor={product.id}>
                                                    {product.name}
                                                </label>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                        <div>
                            <p className="checkbox-sec-title">
                                {t("vegetables_title")}
                            </p>
                            <ul>
                                {productsData
                                    .filter(
                                        (product) => product.type == "vegetable"
                                    )
                                    .map((product) => {
                                        return (
                                            <li
                                                className="checkbox-item"
                                                key={product.id}
                                            >
                                                <input
                                                    type="checkbox"
                                                    name={product.name}
                                                    id={product.id}
                                                />
                                                <label htmlFor={product.id}>
                                                    {product.name}
                                                </label>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    </div>

                    <div className="input-container">
                        <label className="contact-label" htmlFor="message">
                            {t("contacts.message")}
                        </label>
                        <textarea name="Message" id="message"></textarea>
                    </div>
                    <button className="form-submit-btn" type="submit">
                        {t("contacts.submit")}
                    </button>
                </form>
                <div className="google-map__wrapper">
                    <h2 className="google-map__title">
                        {t("contacts.map_title")}
                    </h2>
                    <iframe
                        className="location-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d666.0764004226559!2d23.74658175529479!3d48.10434021444485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47379f8eb1dc7f03%3A0x6e39e1068f4cb4a!2sYagoda%20Karpat%2C%20LLC!5e0!3m2!1sen!2sua!4v1722068818836!5m2!1sen!2sua"
                    ></iframe>
                </div>
            </div>
        </>
    );
};
export default Contacts;
