import PageTitle from "../PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import "./Contacts.scss";

const Contacts = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="contacts-container">
                <PageTitle name={t("contacts.title")} id={"contacts"} />
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
                    action="mailto:dordyaysberries@gmail.com"
                    method="post"
                    encType="text/plain"
                >
                    <p className="form__title">
                        {t("contacts.contact_us_title")}
                    </p>
                    <div className="input-container">
                        <label htmlFor="first-name">
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
                        <label htmlFor="last-name">
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
                        <label htmlFor="phone-number">
                            {t("contacts.tel")}
                        </label>
                        <input
                            className="form__input"
                            id="phone-number"
                            name="Phone number"
                            type="tel"
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="message">{t("contacts.message")}</label>
                        <textarea name="Message" id="message"></textarea>
                    </div>
                    <button className="form-submit-btn" type="submit">
                        {t("contacts.submit")}
                    </button>
                </form>
                <div className="google-map__wrapper">
                    <p className="google-map__title">
                        {t("contacts.map_title")}
                    </p>
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
