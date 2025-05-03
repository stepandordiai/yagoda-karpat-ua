import { useTranslation } from "react-i18next";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

import img1 from "/gallery/1.jpg";
import img2 from "/gallery/2.jpg";
import img3 from "/gallery/3.jpg";
import img4 from "/gallery/4.jpg";
import img5 from "/gallery/5.jpg";
import img6 from "/gallery/6.jpg";
import img7 from "/gallery/7.jpg";
import styles from "./Gallery.module.scss";

const Gallery = () => {
	const { t } = useTranslation();

	const images = [img1, img2, img3, img4, img5, img6, img7];

	return (
		<div className={styles["gallery"]}>
			<h2 className={styles["gallery__title"]}>{t("gallery_title")}</h2>
			<Swiper
				breakpoints={{
					900: {
						slidesPerView: 4,
						spaceBetween: 25,
					},
				}}
				spaceBetween={10}
				slidesPerView={2}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				speed={1000}
				loop={true}
				modules={[Autoplay]}
				className={styles["mySwiper"]}
			>
				{images.map((img, index) => {
					return (
						<SwiperSlide key={index} className={styles["swiper-card"]}>
							<img
								className={styles["swiper-img"]}
								src={img}
								alt=""
								loading="lazy"
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Gallery;
