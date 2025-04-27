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

	const { id } = useParams();

	const productsData = ProductsData();

	const productData = productsData.filter((product) => {
		return product.id === id;
	});

	const [activeVariantState, setActiveVariantState] = useState(
		productData[0].variants[0].state
	);

	function handleActiveVariantState(props) {
		setActiveVariantState(props);
	}

	const product = productData[0].variants.filter((variant) => {
		if (variant.state == activeVariantState) {
			return variant;
		}
	});

	console.log(product[0]);

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
							{`${productData[0].name} ${
								product[0].state ? " (" + product[0].state + ")" : ""
							}`}
						</p>
						<ul>
							<li>Походження: {productData[0].origin}</li>
							<li>Пакування: {productData[0].pack}</li>
							<li>Температура: {productData[0].temp}</li>
						</ul>
						{productData[0].variants &&
							productData[0].variants.map((variant, index) => {
								if (variant.state) {
									return (
										<button
											key={index}
											onClick={() => handleActiveVariantState(variant.state)}
											className={
												variant.state === activeVariantState
													? "choose-btn choose-btn--active"
													: "choose-btn"
											}
										>
											{variant.state}
										</button>
									);
								}
							})}
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
						{product[0].images && (
							<>
								{product[0].images.map((img, index) => {
									return (
										<SwiperSlide key={index}>
											<img className="swiper-img" src={img} alt="" />
										</SwiperSlide>
									);
								})}
							</>
						)}
						<div className="play-progress">
							<span className="play-progress-inner"></span>
						</div>
					</Swiper>
				</div>
			</div>

			<p>{t("product_page.related")}</p>
			{/* {productsData
				.filter((product) => {
					return (
						product.status === productData[0].status &&
						product.type === productData[0].type &&
						product.name !== productData[0].name
					);
				})
				.map((product) => {
					return <Product product={product} key={product.id} />;
				})} */}
		</>
	);
};

export default ProductPage;
