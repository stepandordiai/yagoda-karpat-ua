import styles from "./Gallery.module.scss";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

import img1 from "/gallery/01.jpg";
import img2 from "/gallery/02.jpg";
import img3 from "/gallery/03.jpg";
import img4 from "/gallery/04.jpg";

const Gallery = () => {
	return (
		<div className={styles["gallery"]}>
			<h2 className={styles["gallery__title"]}>Gallery</h2>
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
				<SwiperSlide className={styles["swiper-card"]}>
					<img className={styles["swiper-img"]} src={img1} alt="" />
				</SwiperSlide>
				<SwiperSlide className={styles["swiper-card"]}>
					<img className={styles["swiper-img"]} src={img2} alt="" />
				</SwiperSlide>
				<SwiperSlide className={styles["swiper-card"]}>
					<img className={styles["swiper-img"]} src={img3} alt="" />
				</SwiperSlide>
				<SwiperSlide className={styles["swiper-card"]}>
					<img className={styles["swiper-img"]} src={img4} alt="" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Gallery;
