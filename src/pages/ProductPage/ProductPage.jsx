import PageNavTitle from "../../components/PageNavTitle/PageNavTitle";
import { useParams } from "react-router-dom";
import "./ProductPage.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { productsData } from "./../../data/productsData";
import Product from "../../components/Product/Product";

const ProductPage = () => {
    const { id } = useParams();

    const productData = productsData.filter((product) => {
        // FIXME:
        return product.name === id;
    });

    const { pathname, hash } = useLocation();

    useEffect(() => {
        document.title = id;
        // FIXME:
    }, [id, pathname, hash]);

    return (
        <>
            <PageNavTitle title={id} previousTitle={"Продукція"} />
            <p className="coming-soon">
                Незабаром тут з'явиться інформація про продукт
            </p>
            <p>Схожа продукція</p>
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
