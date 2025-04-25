// Bilberry

import bilberryImg from "/products-img/bilberry.jpg";
import bilberryImg2 from "/products-img/bilberry2.jpg";

// Lingonberry

import lingonberryImg from "/products-img/lingonberry.jpg";
import lingonberryImg2 from "/products-img/lingonberry2.jpg";

// Rosehip

import rosehipImg from "/products-img/rosehip.jpg";
import rosehipImg2 from "/products-img/rosehip2.jpg";

// Plum

import plumImg from "/products-img/plum.jpg";
import plumImg2 from "/products-img/plum2.jpg";

// Plum dry

import plumDryImg from "/products-img/plum-dry.jpg";

// Elderberry

import elderberryImg from "/products-img/elderberry.jpg";
import elderberryImg2 from "/products-img/elderberry2.png";

// Strawberry

import strawberryImg from "/products-img/strawberry.jpg";
import strawberryImg2 from "/products-img/strawberry2.jpg";

// Raspberry

import raspberryImg from "/products-img/raspberry.jpg";
import raspberryImg2 from "/products-img/raspberry2.jpg";
import raspberryImg3 from "/products-img/raspberry3.jpg";

// Sweet pepper

import sweetPepperImg from "/products-img/sweet-pepper.jpg";
import sweetPepperImg2 from "/products-img/sweet-pepper2.jpg";
import sweetPepperImg3 from "/products-img/sweet-pepper3.jpg";
import sweetPepperImg4 from "/products-img/sweet-pepper4.jpg";

// Boletus

import boletusImg from "/products-img/boletus.jpg";
import boletusImg2 from "/products-img/boletus2.jpg";
import boletusImg3 from "/products-img/boletus3.jpg";
import boletusImg4 from "/products-img/boletus4.jpg";
import boletusImg5 from "/products-img/boletus5.jpg";

// Chanterelle

import chanterelleImg from "/products-img/chanterelle.jpg";
import chanterelleImg2 from "/products-img/chanterelle2.jpg";

// Sour cherry

import sourCherryImg from "/products-img/sour-cherry.jpg";
import sourCherryImg2 from "/products-img/sour-cherry2.jpg";

// Honey fungus

import honeyFungusImg from "/products-img/honey-fungus.jpg";
import honeyFungusImg2 from "/products-img/honey-fungus2.jpg";

// Blackberry

import blackberryImg from "/products-img/blackberry.jpg";

// import organicLogo from "/assets/certificates/organic-logo.jpg";

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
			// certificates: [organicLogo],
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
		},
		{
			id: "prunus",
			type: "fruit",
			name: t("products.prunus"),
			pack: "картонна коробка 10 кг",
			temp: "-21 °C",
			origin: "Україна",
			status: "dry",
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
		},
		{
			id: "apricot",
			type: "fruit",
			name: t("products.apricot"),
			pack: "картонна коробка 10 кг",
			temp: "-21 °C",
			origin: "Україна",
			status: "frozen",
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
		},
		{
			id: "blackberry",
			type: "berry",
			name: t("products.blackberry"),
			origin: "Україна",
			pack: "картонна коробка 10 кг",
			temp: "-21 °C",
			status: "frozen",
			productImages: [blackberryImg],
		},
		{
			id: "grape",
			type: "berry",
			name: t("products.grape"),
			pack: "картонна коробка 10 кг",
			temp: "-21 °C",
			origin: "Україна",
			status: "frozen",
		},
		{
			id: "corn",
			type: "vegetable",
			name: t("products.corn"),
			pack: "картонна коробка 10 кг",
			temp: "-21 °C",
			origin: "Україна",
			status: "frozen",
		},
	];

	return productsData;
};

export default ProductsData;
