import { useState } from "react";
import Product from "../Product/Product";
import ProductsData from "../../data/ProductsData";
import PageTitle from "../PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import searchIcon from "/assets/icons/search.png";
import "./Products.scss";

const Products = () => {
    const { t } = useTranslation();

    const [search, setSearch] = useState("");

    const productsData = ProductsData();

    return (
        <section className="js-products" id="products">
            <PageTitle name={t("products_title")} />
            <div>
                <p className="filter-title">{t("products.filter")}</p>
                <div className="search-wrapper">
                    <input
                        className="search-input"
                        type="text"
                        placeholder={t("products.filter_placeholder")}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="search-icon">
                        <img src={searchIcon} alt="" />
                    </button>
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
        </section>
    );
};

export default Products;
