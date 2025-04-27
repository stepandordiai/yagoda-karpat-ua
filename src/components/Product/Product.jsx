import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import cameraIcon from "/assets/icons/camera.png";
import "./Product.scss";

const Product = ({ product }) => {
	const { t } = useTranslation();

	const { id, name, variants } = product;

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
				<h4 className="product-name">{name}</h4>
				<NavLink to={`/product-page/${id}`} className="product__info-btn">
					{t("products.show_more")}
				</NavLink>
			</div>
		</div>
	);
};

export default Product;
