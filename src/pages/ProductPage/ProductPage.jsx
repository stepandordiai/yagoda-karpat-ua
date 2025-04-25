import { Helmet } from "react-helmet";
import PageNavTitle from "../../components/PageNavTitle/PageNavTitle";
import { useParams } from "react-router-dom";
import ProductsData from "../../data/productsData";
import Product from "../../components/Product/Product";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

import "./ProductPage.scss";

// Swiper
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ProductPage = () => {
	const { t } = useTranslation();

	const productsData = ProductsData();

	const { id } = useParams();

	const [production, setProduction] = useState("pitted");

	function getOption(props) {
		setProduction((prev) => (prev = props));
	}

	const productData = productsData.filter((product) => {
		return product.id === id;
	});

	return (
		<>
			<Helmet>
				<title>{productData[0].name} - Ягода Карпат</title>
			</Helmet>
			<PageNavTitle
				title={productData[0].name}
				previousTitle={t("products_title")}
				homeTitle={t("home_title")}
			/>
			<div className="product-page">
				<div className="product-page__details">
					<div>
						<p className="product-page__details-title">
							{productData[0].name} (
							{production == "pitted" ? "без кістки" : "з кісткою"})
						</p>
						<ul>
							<li>Походження: {productData[0].origin}</li>
							<li>Пакування: {productData[0].pack}</li>
							<li>Температура: {productData[0].temp}</li>
						</ul>
						{productData[0].raw && (
							<>
								<button
									className={`choose-btn ${
										production == "pitted" && "choose-btn--active"
									}`}
									onClick={() => getOption("pitted")}
								>
									без кістки
								</button>{" "}
								<button
									className={`choose-btn ${
										production == "with-stone" && "choose-btn--active"
									}`}
									onClick={() => getOption("with-stone")}
								>
									з кісткою
								</button>
							</>
						)}
					</div>

					<HashLink to={"/#contacts"} className={"product-page__details-link"}>
						Дізнатися про наявність
					</HashLink>
				</div>
				<div className="swiper-wrapper">
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 5000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						className="mySwiper"
					>
						{productData[0].productImages && (
							<>
								{productData[0].raw ? (
									<>
										{productData[0].productImages[production].map(
											(img, index) => {
												return (
													<SwiperSlide key={index}>
														<img className="swiper-img" src={img} alt="" />
													</SwiperSlide>
												);
											}
										)}
									</>
								) : (
									<>
										{productData[0].productImages.map((img, index) => {
											return (
												<SwiperSlide key={index}>
													<img className="swiper-img" src={img} alt="" />
												</SwiperSlide>
											);
										})}
									</>
								)}
							</>
						)}
						<div className="play-progress">
							<span className="play-progress-inner"></span>
						</div>
					</Swiper>
				</div>
			</div>

			<p>{t("product_page.related")}</p>
			{productsData
				.filter((product) => {
					return (
						product.status === productData[0].status &&
						product.type === productData[0].type &&
						product.name !== productData[0].name
					);
				})
				.map((product) => {
					return <Product product={product} key={product.id} />;
				})}
		</>
	);
};

export default ProductPage;
