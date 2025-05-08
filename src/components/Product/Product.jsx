import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import cameraIcon from "/icons/camera.png";
import organicLogo from "/icons/organic-logo.jpg";
import "./Product.scss";

const Product = ({ product }) => {
	const { t } = useTranslation();

	const { id, name, variants, latName, isOrganic } = product;

	const allImages = variants.flatMap((variant) =>
		variant.images ? variant.images : []
	);

	return (
		<div className="product">
			<div className="product__img-wrapper">
				{allImages.length ? (
					<>
						<img
							className="product-img"
							src={allImages[0]}
							alt=""
							loading="lazy"
						/>
						<div className="img-qty">
							<img src={cameraIcon} alt="" loading="lazy" />
							<span>{allImages.length}</span>
						</div>
					</>
				) : (
					<div className="no-img"></div>
				)}
			</div>
			<div className="product__info-container">
				<div className="product__info-container-top">
					<div>
						<p className="product__lat-name">{latName}</p>
						<h4 className="product-name">{name}</h4>
					</div>
					{isOrganic && <img src={organicLogo} alt="" />}
				</div>
				<NavLink to={`/product-page/${id}`} className="product__info-btn">
					{t("products.show_more")}
				</NavLink>
			</div>
		</div>
	);
};

export default Product;
