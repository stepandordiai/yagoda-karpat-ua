import { useState } from "react";
import Product from "../Product/Product";
import { productsData } from "../../data/productsData";
import "./Products.scss";
import PageTitle from "../PageTitle/PageTitle";

const Products = () => {
    const [search, setSearch] = useState("");

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
        <div className="products-container" id="products">
            <PageTitle name="Продукція" />
            <div>
                <p className="filter-title">Фільтер</p>
                <div className="search-wrapper">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Який продукт ви шукаєте?"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
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
    );
};

export default Products;
