import { Helmet } from "react-helmet";
import Contacts from "./../../components/Contacts/Contacts";
import Products from "./../../components/Products/Products";
import AboutUs from "./../../components/AboutUs/AboutUs";
import { useTranslation } from "react-i18next";
import "./Home.scss";
import Gallery from "../../components/Gallery/Gallery";

const Home = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("home.title")} - Ягода Карпат</title>
				<link rel="canonical" href="https://yagodakarpat.com/" />
			</Helmet>
			<div className="home js-home" id="home">
				<div className="home-container__wrapper">
					<div>
						<h1 className="home-main-info">{t("home.title")}</h1>
						<p className="home-info">{t("home.sec_title")}</p>
					</div>
					<img
						className="home-container__img"
						src={
							"https://img.freepik.com/free-photo/frozen-mixed-berry_1339-7845.jpg?t=st=1740245971~exp=1740249571~hmac=6e552ffd5c3c25e585266730dd9ce194588861bc437c2bf4bab39fbaa7de64e4&w=1380"
						}
						alt=""
					/>
					<a className="home-contact-us-btn" href="#contacts">
						{t("contact_us")}
					</a>
				</div>
			</div>
			<AboutUs />
			<Products />
			<Contacts />
			<Gallery />
		</>
	);
};

export default Home;
