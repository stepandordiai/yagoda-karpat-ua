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
import sourCherryImg3 from "/products-img/sour-cherry3.jpg";

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
			name: t("products.bilberry"),
			type: "berry",
			pack: "паперовий мішок 25 кг",
			temp: "-21 °C",
			origin: "Україна",
			variants: [
				{
					id: "bilberry-frozen",
					images: [bilberryImg, bilberryImg2],
				},
			],
		},
		{
			id: "lingonberry",
			name: t("products.lingonberry"),
			type: "berry",
			pack: "паперовий мішок 25 кг",
			temp: "-21 °C",
			origin: "Україна",
			variants: [
				{
					id: "lingonberry-frozen",
					images: [lingonberryImg, lingonberryImg2],
				},
			],
		},
		{
			id: "rosehip",
			name: t("products.rosehip"),
			type: "berry",
			pack: "паперовий мішок 25 кг",
			temp: "-21 °C",
			origin: "Україна",
			variants: [
				{
					id: "rosehip-frozen",
					images: [rosehipImg, rosehipImg2],
				},
			],
		},
		{
			id: "plum-frozen",
			name: t("products.plum"),
			type: "fruit",
			pack: "паперовий мішок 25 кг, картонна коробка 10 кг",
			temp: "-21 °C",
			origin: "Україна",
			variants: [
				{
					id: "plum-frozen-whole",
					state: "ціла",
					images: [plumImg2],
				},
				{
					id: "plum-frozen-half",
					state: "половинка",
					images: [plumImg],
				},
			],
		},
		{
			id: "plum-dry",
			name: t("products.plum_dry"),
			type: "fruit",
			pack: "паперовий мішок 25 кг, картонна коробка 10 кг",
			temp: "-21 °C",
			origin: "Україна",
			variants: [
				{
					id: "plum-dry-with-stone",
					state: "з кісткою",
					images: [plumDryImg],
				},
			],
		},
		{
			id: "prunus",
			name: t("products.prunus"),
			type: "fruit",
			pack: "картонна коробка 10 кг",
			temp: "-21 °C",
			origin: "Україна",
			variants: [
				{
					id: "prunus-pitted",
					state: "без кістки",
				},
			],
		},
		{
			id: "elderberry",
			name: t("products.elderberry"),
			type: "berry",
			pack: "паперовий мішок 25 кг",
			temp: "-21 °C",
			origin: "Україна",
			variants: [
				{
					id: "elderberry-frozen",
					images: [elderberryImg, elderberryImg2],
				},
			],
		},
		{
			id: "strawberry",
			name: t("products.strawberry"),
			type: "berry",
			pack: "паперовий мішок 25 кг",
			temp: "-21 °C",
			origin: "Україна",
			variants: [
				{
					id: "strawberry-frozen",
					images: [strawberryImg, strawberryImg2],
				},
			],
		},
		{
			id: "raspberry",
			name: t("products.raspberry"),
			type: "berry",
			pack: "картонна коробка 10 кг",
			temp: "-21 °C",
			origin: "Україна",
			variants: [
				{
					id: "raspberry-frozen",
					images: [raspberryImg2, raspberryImg, raspberryImg3],
				},
			],
		},
		{
			id: "apricot",
			name: t("products.apricot"),
			type: "fruit",
			pack: "картонна коробка 10 кг",
			temp: "-21 °C",
			origin: "Україна",
			variants: [
				{
					id: "apricot-frozen",
				},
			],
		},
		{
			id: "sweet-pepper-red",
			name: t("products.sweet_pepper_red"),
			type: "vegetable",
			pack: "картонна коробка 10 кг",
			temp: "-21 °C",
			origin: "Україна",
			variants: [
				{
					id: "sweet-pepper-frozen-red-sol",
					state: "соломка",
					images: [sweetPepperImg, sweetPepperImg2],
				},
			],
		},
		{
			id: "sweet-peppe-frozen-greenr",
			name: t("products.sweet_pepper_green"),
			type: "vegetable",
			pack: "картонна коробка 10 кг",
			temp: "-21 °C",
			origin: "Україна",
			variants: [
				{
					id: "sweet-pepper-frozen-green-sol",
					state: "соломка",
					images: [sweetPepperImg3],
				},
			],
		},
		{
			id: "sweet-pepper-frozen-yellow",
			name: t("products.sweet_pepper_yellow"),
			type: "vegetable",
			pack: "картонна коробка 10 кг",
			temp: "-21 °C",
			origin: "Україна",
			variants: [
				{
					id: "sweet-pepper-frozen-yellow-sol",
					state: "соломка",
					images: [sweetPepperImg4],
				},
			],
		},
		{
			id: "boletus",
			name: t("products.boletus"),
			type: "mushroom",
			pack: "картонна коробка 10 кг",
			temp: "-21 °C",
			origin: "Україна",
			status: "frozen",
			variants: [
				{
					id: "boletus-frozen-whole",
					state: "Цілий",
					images: [boletusImg, boletusImg4],
				},
				{
					id: "boletus-frozen-slice",
					state: "Полоска",
					images: [boletusImg2],
				},
				{
					id: "boletus-frozen-cubic",
					state: "Кубик",
					images: [boletusImg3, boletusImg5],
				},
			],
		},
		{
			id: "chanterelle",
			name: t("products.chanterelle"),
			type: "mushroom",
			pack: "картонна коробка 10 кг",
			temp: "-21 °C",
			origin: "Україна",
			variants: [
				{
					id: "chanterelle-dry",
					state: "сушений",
					images: [chanterelleImg, chanterelleImg2],
				},
			],
		},
		{
			id: "sour-cherry",
			name: t("products.sour_cherry"),
			type: "berry",
			pack: "картонна коробка 10 кг",
			temp: "-21 °C",
			origin: "Україна",
			variants: [
				{
					id: "sour-cherry-with-stone",
					state: "з кісткою",
					images: [sourCherryImg, sourCherryImg2],
				},
				{
					id: "sour-cherry-pitted",
					state: "без кістки",
					images: [sourCherryImg3],
				},
			],
		},
		{
			id: "honey-fungus",
			name: t("products.honey_fungus"),
			type: "mushroom",
			pack: "картонна коробка 10 кг",
			temp: "-21 °C",
			origin: "Україна",
			variants: [
				{
					id: "honey-fungus-frozen",
					images: [honeyFungusImg, honeyFungusImg2],
				},
			],
		},
		{
			id: "blackberry",
			name: t("products.blackberry"),
			type: "berry",
			origin: "Україна",
			pack: "картонна коробка 10 кг",
			temp: "-21 °C",
			variants: [
				{
					id: "blackberry-frozen",
					images: [blackberryImg],
				},
			],
		},
		{
			id: "grape",
			name: t("products.grape"),
			type: "berry",
			pack: "картонна коробка 10 кг",
			temp: "-21 °C",
			origin: "Україна",
			variants: [
				{
					id: "grape-frozen",
				},
			],
		},
		{
			id: "corn",
			name: t("products.corn"),
			type: "vegetable",
			pack: "картонна коробка 10 кг",
			temp: "-21 °C",
			origin: "Україна",
			variants: [
				{
					id: "corn-frozen",
				},
			],
		},
	];

	return productsData;
};

export default ProductsData;
