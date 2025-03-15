import { NavLink } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";

// import required modules
import { EffectCreative, Pagination, Navigation } from "swiper/modules";
import "./Product.scss";

const Product = ({ product }) => {
    const {
        id,
        productContainer,
        name,
        latName,
        info,
        pack,
        temp,
        origin,
        status,
        productImages,
        classSwiper,
        infoContainer,
    } = product;

    addEventListener("scroll", () => {
        const slider = document.querySelectorAll(".my-swiper");
        slider.forEach((slide) => {
            if (window.innerHeight > slide.getBoundingClientRect().top + 200) {
                slide.classList.add("active");
            }
        });
        const productInfo = document.querySelectorAll(
            ".product-info-container"
        );
        productInfo.forEach((product) => {
            if (
                window.innerHeight >
                product.getBoundingClientRect().top + 200
            ) {
                product.classList.add("active");
            }
        });
        const slider1 = document.querySelectorAll(".my-swiper-1");
        slider1.forEach((slide) => {
            if (window.innerHeight > slide.getBoundingClientRect().top + 200) {
                slide.classList.add("active");
            }
        });
        const productInfo1 = document.querySelectorAll(
            ".product-info-container-1"
        );
        productInfo1.forEach((product) => {
            if (
                window.innerHeight >
                product.getBoundingClientRect().top + 200
            ) {
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
                            alt=""
                        />
                        <div className="img-qty">
                            {productImages.length}{" "}
                            <i className="fa-solid fa-camera"></i>
                        </div>
                    </>
                ) : (
                    <div className="no-img"></div>
                )}
            </div>
            <div className="product__info-container">
                <div>
                    <p className="product__lat-name">{latName}</p>
                    <p className="product-name">{name}</p>
                </div>
                <NavLink
                    to={`/product-page/${name}`}
                    className="product__info-btn"
                >
                    Детальніше
                </NavLink>

                {/* <ul className="product-list-info">
                        <li className="pack">Пакування: {pack}</li>
                        <li className="temp">Температура: {temp}</li>
                        <li className="origin">Походження: {origin}</li>
                        <li className="status">Статус: {status}</li>
                    </ul> */}
                {/* <a className="contact-us-btn product-btn" href="#section4">
                    Дізнатися про наявність
                </a> */}
            </div>
            {/* <Swiper
                    grabCursor={true}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
                    modules={[EffectCreative, Pagination, Navigation]}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    //
                    observer={true}
                    observeParents={true}
                    //
                    className={classSwiper}
                >
                    {productImages.map((productImage, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img
                                    loading="lazy"
                                    src={productImage}
                                    alt={name}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper> */}
        </div>
    );
};

export default Product;
