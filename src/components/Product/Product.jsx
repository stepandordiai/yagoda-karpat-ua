import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import cameraIcon from "/icons/camera.png";
import organicLogo from "/icons/organic-logo.jpg";
import "./Product.scss";

const Product = ({ product }) => {
	const { t } = useTranslation();

	const { id, name, variants, latName, isOrganic, harvest } = product;

	const allImages = variants.flatMap((variant) =>
		variant.images ? variant.images : []
	);

	return (
		<div className="product">
			<div className="product-top">
				<div className="product__img-wrapper">
					{allImages.length ? (
						<>
							<img
								className="product__img"
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
						<div className="img--none"></div>
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
			<p style={{ fontWeight: 500 }}>Harvest</p>
			<div className="product__harvest">
				<div
					title="January"
					className={
						harvest.includes(1)
							? "harvest-month month--active"
							: "harvest-month"
					}
				>
					С
				</div>
				<div
					title="February"
					className={
						harvest.includes(2)
							? "harvest-month month--active"
							: "harvest-month"
					}
				>
					Л
				</div>
				<div
					title="March"
					className={
						harvest.includes(3)
							? "harvest-month month--active"
							: "harvest-month"
					}
				>
					Б
				</div>
				<div
					title="April"
					className={
						harvest.includes(4)
							? "harvest-month month--active"
							: "harvest-month"
					}
				>
					К
				</div>
				<div
					title="May"
					className={
						harvest.includes(5)
							? "harvest-month month--active"
							: "harvest-month"
					}
				>
					Т
				</div>
				<div
					title="June"
					className={
						harvest.includes(6)
							? "harvest-month month--active"
							: "harvest-month"
					}
				>
					Ч
				</div>
				<div
					title="July"
					className={
						harvest.includes(7)
							? "harvest-month month--active"
							: "harvest-month"
					}
				>
					Л
				</div>
				<div
					title="August"
					className={
						harvest.includes(8)
							? "harvest-month month--active"
							: "harvest-month"
					}
				>
					С
				</div>
				<div
					title="September"
					className={
						harvest.includes(9)
							? "harvest-month month--active"
							: "harvest-month"
					}
				>
					В
				</div>
				<div
					title="October"
					className={
						harvest.includes(10)
							? "harvest-month month--active"
							: "harvest-month"
					}
				>
					Ж
				</div>
				<div
					title="November"
					className={
						harvest.includes(11)
							? "harvest-month month--active"
							: "harvest-month"
					}
				>
					Л
				</div>
				<div
					title="December"
					className={
						harvest.includes(12)
							? "harvest-month month--active"
							: "harvest-month"
					}
				>
					Г
				</div>
			</div>
		</div>
	);
};

export default Product;
