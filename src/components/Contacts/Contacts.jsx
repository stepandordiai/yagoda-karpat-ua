import PageTitle from "../PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import phoneIcon from "/assets/icons/old-typical-phone.png";
import mailIcon from "/assets/icons/email.png";
import pinIcon from "/assets/icons/pin.png";
import "./Contacts.scss";
import OurCertificates from "../OurCertificates/OurCertificates";
import BusinessHours from "../BusinessHours/BusinessHours";

const Contacts = () => {
	const { t } = useTranslation();

	return (
		<section className="js-contacts" id="contacts">
			<PageTitle name={t("contacts_title")} />
			<div className="contacts-icons-container">
				<a href="tel:+380968065513" className="icon-container">
					<img src={phoneIcon} alt="" />
					<span>+38 (096) 806 55 13</span>
				</a>
				<a href="mailto:info@yagodakarpat.com" className="icon-container">
					<img src={mailIcon} alt="" />
					<span>info@yagodakarpat.com</span>
				</a>
				<a
					className="icon-container"
					href="https://maps.app.goo.gl/U8hieofkGSuBgP7R9"
					target="_blank"
				>
					<img src={pinIcon} alt="" />
					<span>{t("contacts.address")}</span>
				</a>
			</div>
			<div className="form-map-container">
				<form
					className="form"
					action="mailto:info@yagodakarpat.com"
					method="post"
					encType="text/plain"
				>
					<h2 className="form__title">{t("contacts.contact_us_title")}</h2>
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
					<h2 className="google-map__title">{t("contacts.map_title")}</h2>
					<iframe
						className="location-map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d666.0764004226559!2d23.74658175529479!3d48.10434021444485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47379f8eb1dc7f03%3A0x6e39e1068f4cb4a!2sYagoda%20Karpat%2C%20LLC!5e0!3m2!1sen!2sua!4v1722068818836!5m2!1sen!2sua"
					></iframe>
				</div>
			</div>
			<div className="contacts-container">
				<OurCertificates />
				{/* <div className="column-container"> */}
				<BusinessHours />
				{/* <div className="empty-section"></div> */}
				{/* </div> */}
			</div>
		</section>
	);
};
export default Contacts;
