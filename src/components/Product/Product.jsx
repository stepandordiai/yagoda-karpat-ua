import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cameraIcon from "/assets/icons/camera.png";
import "./Product.scss";

const Product = ({ product }) => {
	const { t } = useTranslation();

	const { id, name, productImages } = product;

	addEventListener("scroll", () => {
		const slider = document.querySelectorAll(".my-swiper");
		slider.forEach((slide) => {
			if (window.innerHeight > slide.getBoundingClientRect().top + 200) {
				slide.classList.add("active");
			}
		});
		const productInfo = document.querySelectorAll(".product-info-container");
		productInfo.forEach((product) => {
			if (window.innerHeight > product.getBoundingClientRect().top + 200) {
				product.classList.add("active");
			}
		});
		const slider1 = document.querySelectorAll(".my-swiper-1");
		slider1.forEach((slide) => {
			if (window.innerHeight > slide.getBoundingClientRect().top + 200) {
				slide.classList.add("active");
			}
		});
		const productInfo1 = document.querySelectorAll(".product-info-container-1");
		productInfo1.forEach((product) => {
			if (window.innerHeight > product.getBoundingClientRect().top + 200) {
				product.classList.add("active");
			}
		});
	});

	return (
		<div className="product">
			<div className="product__img-wrapper">
				{productImages ? (
					<>
						<img
							className="product-img"
							src={productImages[0]}
							alt={name}
							loading="lazy"
						/>
						<div className="img-qty">
							<img src={cameraIcon} alt="Camera icon" loading="lazy" />
							<span>{productImages.length}</span>
						</div>
					</>
				) : (
					<div className="no-img"></div>
				)}
			</div>
			<div className="product__info-container">
				<h4 className="product-name">{name}</h4>
				<NavLink to={`/product-page/${id}`} className="product__info-btn">
					{t("products.show_more")}
				</NavLink>
			</div>
		</div>
	);
};

export default Product;
