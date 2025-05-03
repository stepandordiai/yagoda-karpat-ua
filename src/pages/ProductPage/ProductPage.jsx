import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import PageNavTitle from "../../components/PageNavTitle/PageNavTitle";
import { useParams } from "react-router-dom";
import ProductsData from "../../data/ProductsData";
import Product from "../../components/Product/Product";
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

	const [activeVariantId, setActiveVariantId] = useState(
		productData[0].variants[0].id || ""
	);

	function handleVariantId(props) {
		setActiveVariantId(props);
	}

	// This variable returns variant on current state
	const productVariant = productData[0].variants.filter((variant) => {
		if (variant.state) {
			if (variant.id === activeVariantId) {
				return variant;
			}
		} else {
			return productData[0].variants[0];
		}
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
					<div className="product-page__details-inner">
						<div>
							<p className="product-page__lat-name">{productData[0].latName}</p>
							<p className="product-page__name">{`${productData[0].name} ${
								productVariant[0].state ? productVariant[0].state : ""
							}`}</p>
						</div>
						<div className="product-page__variants">
							{productData[0].variants &&
								productData[0].variants.map((variant, index) => {
									if (variant.state) {
										return (
											<button
												key={index}
												onClick={() => handleVariantId(variant.id)}
												className={
													variant.id === activeVariantId
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
						<div>
							<p style={{ color: "rgba(0, 0, 0, 0.5)" }}>
								{t("product_page.origin_title")}
							</p>
							<p>{productData[0].origin}</p>
						</div>
						<div>
							<p style={{ color: "rgba(0, 0, 0, 0.5)" }}>
								{t("product_page.packaging_title")}
							</p>
							<p>{productData[0].pack}</p>
						</div>
						<div>
							<p style={{ color: "rgba(0, 0, 0, 0.5)" }}>
								{t("product_page.desc_title")}
							</p>
							<p>{productData[0].desc && productData[0].desc}</p>
						</div>
					</div>
					<HashLink to={"/#contacts"} className={"product-page__link"}>
						{t("product_page.aviability_link")}
					</HashLink>
				</div>
				<div className="swiper-wrapper">
					{productVariant[0].images && (
						<>
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
								{productVariant[0].images.map((img, index) => {
									return (
										<SwiperSlide key={index}>
											<img className="swiper-img" src={img} alt="" />
										</SwiperSlide>
									);
								})}

								<div className="play-progress">
									<span className="play-progress-inner"></span>
								</div>
							</Swiper>
						</>
					)}
				</div>
			</div>

			<p className="related-products__title">{t("product_page.related")}</p>
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
