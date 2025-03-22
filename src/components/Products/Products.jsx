import { useState } from "react";
import Product from "../Product/Product";
import ProductsData from "../../data/productsData";
import PageTitle from "../PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import "./Products.scss";

const Products = () => {
    const { t } = useTranslation();

    const [search, setSearch] = useState("");

    const productsData = ProductsData();
    // addEventListener("keyup", () => {
    //     const slider = document.querySelectorAll(".my-swiper");
    //     slider.forEach((slide) => {
    //         slide.classList.add("active");
    //     });
    //     const productInfo = document.querySelectorAll(
    //         ".product-info-container"
    //     );
    //     productInfo.forEach((product) => {
    //         product.classList.add("active");
    //     });
    //     const slider1 = document.querySelectorAll(".my-swiper-1");
    //     slider1.forEach((slide) => {
    //         slide.classList.add("active");
    //     });
    //     const productInfo1 = document.querySelectorAll(
    //         ".product-info-container-1"
    //     );
    //     productInfo1.forEach((product) => {
    //         product.classList.add("active");
    //     });
    // });

    return (
        <>
            <PageTitle name={t("products.title")} id={"products"} />
            <div>
                <p className="filter-title">{t("products.filter")}</p>
                <div className="search-wrapper">
                    <input
                        className="search-input"
                        type="text"
                        placeholder={t("products.filter_placeholder")}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
            <div className="products-container">
                {productsData
                    .filter((item) => {
                        return search.toLowerCase() === ""
                            ? item
                            : item.name
                                  .toLowerCase()
                                  .startsWith(search.toLowerCase());
                    })
                    .map((product) => {
                        return <Product product={product} key={product.id} />;
                    })}
            </div>
        </>
    );
};

export default Products;
