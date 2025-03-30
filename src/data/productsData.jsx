import bilberryIcon from "./icons/bilberry-icon.png";
import lingonberryIcon from "./icons/lingonberry-icon.png";
import elderberryIcon from "./icons/elderberry-icon.png";
import raspberryIcon from "./icons/raspberry-icon.png";
import strawberryIcon from "./icons/strawberry-icon.png";
import plumIcon from "./icons/plum-icon.png";
import boletusIcon from "./icons/boletus-icon.png";
import chanterelleIcon from "./icons/chanterelle-icon.png";
import rosehipIcon from "./icons/rosehip-icon.png";
import sweetPepperIcon from "./icons/sweet-pepper.png";
import apricotIcon from "./icons/apricot-icon.png";
//
import bilberryImg from "./products-img/bilberry.jpg";
import bilberryImg2 from "./products-img/bilberry2.jpg";
import lingonberryImg from "./products-img/lingonberry.jpg";
import lingonberryImg2 from "./products-img/lingonberry2.jpg";
import rosehipImg from "./products-img/rosehip.jpg";
import rosehipImg2 from "./products-img/rosehip2.jpg";
import elderberryImg from "./products-img/elderberry.jpg";
import elderberryImg2 from "./products-img/elderberry2.png";
import strawberryImg from "./products-img/strawberry.jpg";
import strawberryImg2 from "./products-img/strawberry2.jpg";
import raspberryImg from "./products-img/raspberry.jpg";
import raspberryImg2 from "./products-img/raspberry2.jpg";
import raspberryImg3 from "./products-img/raspberry3.jpg";
import plumImg from "./products-img/plum.jpg";
import plumImg2 from "./products-img/plum2.jpg";
import plumDryImg from "./products-img/plum-dry.jpg";
import prunusImg from "./products-img/prunus.jpg";
import apricotImg from "./products-img/apricot.jpg";
import sweetPepperImg from "./products-img/sweet-pepper.jpg";
import sweetPepperImg2 from "./products-img/sweet-pepper2.jpg";
import sweetPepperImg3 from "./products-img/sweet-pepper3.jpg";
import sweetPepperImg4 from "./products-img/sweet-pepper4.jpg";
import boletusImg from "./products-img/boletus.jpg";
import boletusImg2 from "./products-img/boletus2.jpg";
import boletusImg3 from "./products-img/boletus3.jpg";
import boletusImg4 from "./products-img/boletus4.jpg";
import boletusImg5 from "./products-img/boletus5.jpg";
import chanterelleImg from "./products-img/chanterelle.jpg";
import chanterelleImg2 from "./products-img/chanterelle2.jpg";
import sourCherryImg from "./products-img/sour-cherry.jpg";
import sourCherryImg2 from "./products-img/sour-cherry2.jpg";
import honeyFungusImg from "./products-img/honey-fungus.jpg";
import honeyFungusImg2 from "./products-img/honey-fungus2.jpg";
import blackberryImg from "./products-img/blackberry.jpg";
import blackberryImg2 from "./products-img/blackberry.jpg";

import { useTranslation } from "react-i18next";

const ProductsData = () => {
    const { t } = useTranslation();

    const productsData = [
        {
            id: "bilberry",
            type: "berry",
            name: t("products.bilberry"),
            pack: "паперовий мішок 25 кг",
            temp: "-21 °C",
            origin: "Україна",
            status: "frozen",
            productImages: [bilberryImg, bilberryImg2],
            classSwiper: "my-swiper",
            icon: bilberryIcon,
        },
        {
            id: "lingonberry",
            type: "berry",
            name: t("products.lingonberry"),
            pack: "паперовий мішок 25 кг",
            temp: "-21 °C",
            origin: "Україна",
            status: "frozen",
            productImages: [lingonberryImg, lingonberryImg2],
            classSwiper: "my-swiper-1",
            icon: lingonberryIcon,
        },
        {
            id: "rosehip",
            type: "berry",
            name: t("products.rosehip"),
            pack: "паперовий мішок 25 кг",
            temp: "-21 °C",
            origin: "Україна",
            status: "frozen",
            productImages: [rosehipImg, rosehipImg2],
            classSwiper: "my-swiper",
            icon: rosehipIcon,
        },
        {
            id: "plum",
            type: "fruit",
            name: t("products.plum"),
            pack: "паперовий мішок 25 кг, картонна коробка 10 кг",
            temp: "-21 °C",
            origin: "Україна",
            status: "frozen",
            productImages: [plumImg2],
            classSwiper: "my-swiper",
            icon: plumIcon,
        },
        {
            id: "plum-pitted",
            type: "fruit",
            name: t("products.plum_half"),
            pack: "паперовий мішок 25 кг, картонна коробка 10 кг",
            temp: "-21 °C",
            origin: "Україна",
            status: "frozen",
            productImages: [plumImg],
            classSwiper: "my-swiper",
            icon: plumIcon,
        },
        {
            id: "plum-dry",
            type: "fruit",
            name: t("products.plum_dry"),
            pack: "картонна коробка 10 кг",
            temp: "-21 °C",
            origin: "Україна",
            status: "dry",
            productImages: [plumDryImg],
            classSwiper: "my-swiper",
        },
        {
            id: "prunus",
            type: "fruit",
            name: t("products.prunus"),
            pack: "картонна коробка 10 кг",
            temp: "-21 °C",
            origin: "Україна",
            status: "dry",
            classSwiper: "my-swiper",
        },
        {
            id: "elderberry",
            type: "berry",
            name: t("products.elderberry"),
            pack: "паперовий мішок 25 кг",
            temp: "-21 °C",
            origin: "Україна",
            status: "frozen",
            productImages: [elderberryImg, elderberryImg2],
            classSwiper: "my-swiper-1",
            icon: elderberryIcon,
        },
        {
            id: "strawberry",
            type: "berry",
            name: t("products.strawberry"),
            pack: "паперовий мішок 25 кг",
            temp: "-21 °C",
            origin: "Україна",
            status: "frozen",
            productImages: [strawberryImg, strawberryImg2],
            classSwiper: "my-swiper",
            icon: strawberryIcon,
        },
        {
            id: "raspberry",
            type: "berry",
            name: t("products.raspberry"),
            pack: "картонна коробка 10 кг",
            temp: "-21 °C",
            origin: "Україна",
            status: "frozen",
            productImages: [raspberryImg2, raspberryImg, raspberryImg3],
            classSwiper: "my-swiper-1",
            icon: raspberryIcon,
        },
        {
            id: "apricot",
            type: "fruit",
            name: t("products.apricot"),
            pack: "картонна коробка 10 кг",
            temp: "-21 °C",
            origin: "Україна",
            status: "frozen",
            classSwiper: "my-swiper-1",
            icon: apricotIcon,
        },
        {
            id: "sweet-pepper",
            type: "vegetable",
            name: t("products.sweet_pepper"),
            pack: "картонна коробка 10 кг",
            temp: "-21 °C",
            origin: "Україна",
            status: "frozen",
            productImages: [
                sweetPepperImg,
                sweetPepperImg2,
                sweetPepperImg3,
                sweetPepperImg4,
            ],
            classSwiper: "my-swiper",
            icon: sweetPepperIcon,
        },
        {
            id: "boletus",
            type: "mushroom",
            name: t("products.boletus"),
            pack: "картонна коробка 10 кг",
            temp: "-21 °C",
            origin: "Україна",
            status: "frozen",
            productImages: [
                boletusImg,
                boletusImg2,
                boletusImg3,
                boletusImg4,
                boletusImg5,
            ],
            classSwiper: "my-swiper-1",
            icon: boletusIcon,
        },
        {
            id: "chanterelle",
            type: "mushroom",
            name: t("products.chanterelle"),
            pack: "картонна коробка 10 кг",
            temp: "-21 °C",
            origin: "Україна",
            status: "dry",
            productImages: [chanterelleImg, chanterelleImg2],
            classSwiper: "my-swiper",
            icon: chanterelleIcon,
        },
        {
            id: "sour-cherry",
            type: "berry",
            name: t("products.sour_cherry"),
            pack: "картонна коробка 10 кг",
            temp: "-21 °C",
            origin: "Україна",
            status: "frozen",
            productImages: [sourCherryImg, sourCherryImg2],
            classSwiper: "my-swiper-1",
        },
        {
            id: "honey-fungus",
            type: "mushroom",
            name: t("products.honey_fungus"),
            pack: "картонна коробка 10 кг",
            temp: "-21 °C",
            origin: "Україна",
            status: "frozen",
            productImages: [honeyFungusImg, honeyFungusImg2],
            classSwiper: "my-swiper-1",
        },
        {
            id: "blackberry",
            type: "berry",
            name: t("products.blackberry"),
            pack: "картонна коробка 10 кг",
            temp: "-21 °C",
            origin: "Україна",
            status: "frozen",
            productImages: [blackberryImg, blackberryImg2],
            classSwiper: "my-swiper-1",
        },
        {
            id: "grape",
            type: "berry",
            name: t("products.grape"),
            pack: "картонна коробка 10 кг",
            temp: "-21 °C",
            origin: "Україна",
            status: "frozen",
            classSwiper: "my-swiper-1",
        },
    ];

    return productsData;
};

export default ProductsData;
