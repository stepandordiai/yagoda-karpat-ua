import PageNavTitle from "../../components/PageNavTitle/PageNavTitle";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { productsData } from "./../../data/productsData";
import ProductsData from "../../data/productsData";
import Product from "../../components/Product/Product";
import { useTranslation } from "react-i18next";
import "./ProductPage.scss";

//

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { HashLink } from "react-router-hash-link";

const ProductPage = () => {
    // const progressCircle = useRef(null);
    // const progressContent = useRef(null);
    // const onAutoplayTimeLeft = (s, time, progress) => {
    //     progressCircle.current.style.setProperty("--progress", 1 - progress);
    //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    // };

    //

    const { t } = useTranslation();

    const productsData = ProductsData();

    const { id } = useParams();

    const productData = productsData.filter((product) => {
        // FIXME:
        return product.id === id;
    });

    const { pathname, hash } = useLocation();

    useEffect(() => {
        document.title = productData[0].name + " - Ягода Карпат";
        // FIXME:
    }, [id, pathname, hash]);

    return (
        <>
            <PageNavTitle
                title={productData[0].name}
                previousTitle={t("products_title")}
                homeTitle={t("home_title")}
            />
            <div className="product-page">
                <div className="product-page__details">
                    <div>
                        <p className="product-page__details-title">
                            {productData[0].name}
                        </p>
                        <ul>
                            <li>Походження: {productData[0].origin}</li>
                            <li>Пакування: {productData[0].pack}</li>
                            <li>Температура: {productData[0].temp}</li>
                        </ul>
                        <img
                            width={50}
                            src={productData[0].certificates}
                            alt=""
                        />
                    </div>

                    <HashLink
                        to={"/#contacts"}
                        className={"product-page__details-link"}
                    >
                        Дізнатися про наявність
                    </HashLink>
                </div>
                <div className="swiper-wrapper">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        // onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        {productData[0].productImages && (
                            <>
                                {productData[0].productImages.map(
                                    (img, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <img
                                                    className="swiper-img"
                                                    src={img}
                                                    alt=""
                                                />
                                            </SwiperSlide>
                                        );
                                    }
                                )}
                            </>
                        )}

                        {/* <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div> */}
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
