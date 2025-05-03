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

const productsData = () => {
	const { t } = useTranslation();

	const productsData = [
		{
			id: "bilberry",
			type: "berry",
			status: "frozen",
			latName: "Vaccinium myrtillus",
			name: t("products.bilberry"),
			origin: "Україна",
			pack: "паперовий мішок 25 кг",
			desc: "Дбайливо зібрана в екологічно чистих лісах у період повної стиглості, вона зберігає всю глибину свого насиченого смаку та аромат лісу. Шокова заморозка дозволяє зберегти не лише форму, а й природну користь ягід — вітаміни, антоціани та антиоксиданти. Це більше, ніж просто інгредієнт — це природна енергія для смузі, десертів, випічки або домашнього варення. Насичена, трохи терпка, але ніжна — чорниця, яка повертає до смаку літа в будь-яку пору року.",
			variants: [
				{
					id: "bilberry-frozen",
					images: [bilberryImg, bilberryImg2],
				},
			],
		},
		{
			id: "lingonberry",
			type: "berry",
			status: "frozen",
			latName: "Vaccinium vitis-idaea",
			name: t("products.lingonberry"),
			origin: "Україна",
			pack: "паперовий мішок 25 кг",
			desc: "Яскрава, терпка, з характером — ця ягода не шукає компромісів. Вона дозріває повільно, вбираючи в себе чисте повітря хвойних лісів і силу дикої природи. Ми заморожуємо її відразу після збору, щоб зберегти цю справжню гірко-солодку палітру та природні властивості. Брусниця чудово доповнює м’ясні страви, соуси, десерти або домашні настоянки. Це ягода, що не лише смакує, а й додає життя кожному рецепту — трошки дикої сили, трошки північного вогню.",
			variants: [
				{
					id: "lingonberry-frozen",
					images: [lingonberryImg, lingonberryImg2],
				},
			],
		},
		{
			id: "rosehip",
			type: "berry",
			status: "frozen",
			latName: "Rosa canina",
			name: t("products.rosehip"),
			origin: "Україна",
			pack: "паперовий мішок 25 кг",
			desc: "Зібрана на межі бабиного літа, коли ягода вже ввібрала всю м’якість осіннього сонця, але ще не втратила свіжість дикої природи. Шокова заморозка дозволяє зберегти не лише її неповторний смак, а й природне багатство — рекордну кількість вітаміну C, мінералів та цілющих ефірних масел. Це не просто ягода — це еліксир здоров’я, що перетворює чай на лікувальний настій, варення — на домашній скарб, а десерти — на справжню осінню казку. Шипшина для тих, хто цінує справжнє.",
			variants: [
				{
					id: "rosehip-frozen",
					images: [rosehipImg, rosehipImg2],
				},
			],
		},
		{
			id: "plum-frozen",
			type: "fruit",
			status: "frozen",
			latName: "Prunus domestica",
			name: t("products.plum"),
			origin: "Україна",
			pack: "паперовий мішок 25 кг, картонна коробка 10 кг",
			desc: "Солодка з легкою кислинкою, ароматна і соковита, ця слива — не просто фрукт, а спогад про теплі вечори, коли дерева ще зітхають у серпневому повітрі. Ми заморожуємо її саме в той момент, коли слива досягає своєї вершини — стигла, м’яка, але ще пружна. У ній — усе: для пирогів із хрусткою скоринкою, ароматних соусів до м’яса, ніжних компотів чи просто затишного смаку дитинства. Це ягода, що поєднує простоту та глибину. Слива, яка знає, як торкнутись серця.",
			variants: [
				{
					id: "plum-frozen-whole",
					state: t("product_page.state_5"),
					images: [plumImg2],
				},
				{
					id: "plum-frozen-half",
					state: t("product_page.state_6"),
					images: [plumImg],
				},
			],
		},
		{
			id: "plum-dried",
			type: "fruit",
			status: "dried",
			latName: "Prunus domestica",
			name: t("products.plum_dry"),
			origin: "Україна",
			pack: "паперовий мішок 25 кг, картонна коробка 10 кг",
			desc: "Зібрана у розпал літа й висушена повільно, з любов’ю — щоб не зник жоден натяк на карамельний післясмак. У кожному плоді — тепло сонця, глибина смаку та легка димна нотка, ніби згадка про бабусину піч. Це не просто солодощі — це інгредієнт зі змістом: для вишуканих м’ясних страв, домашніх десертів або ранкової енергії в каші. Натуральна, насичена, справжня — слива, яка говорить без слів.",
			variants: [
				{
					id: "plum-dried-with-stone",
					state: t("product_page.state_5"),
					images: [plumDryImg],
				},
			],
		},
		{
			id: "prunus",
			type: "fruit",
			status: "dried",
			latName: "Prunus domestica",
			name: t("products.prunus"),
			origin: "Україна",
			pack: "картонна коробка 10 кг",
			desc: "Стиглі сливи, дбайливо висушені до ідеальної м'якості, перетворюються на справжню природну насолоду, що дарує незабутній смак літа і осені в кожному укусу. Їх ніжна текстура і природна солодкість розкриваються поступово, залишаючи після себе легкий димний відтінок і спогади про теплі вечори під зоряним небом. Чорнослив — це не просто перекуска, а джерело енергії для тіла та душі, чудовий супутник для запашних страв, випічки або як інгредієнт у десертах, що просякнуті природним смаком і здоров'ям. Це — ягода, яка говорить мовою часу.",
			variants: [
				{
					id: "prunus-pitted",
					state: t("product_page.state_6"),
				},
			],
		},
		{
			id: "elderberry",
			type: "berry",
			status: "frozen",
			latName: "Sambucus nigra",
			name: t("products.elderberry"),
			origin: "Україна",
			pack: "паперовий мішок 25 кг",
			desc: "Чарівна і загадкова, бузина дарує не тільки свій унікальний смак, але й аромат лісу, що живе в тіні старих дерев. Заморожена на піку своєї стиглості, вона зберігає всю силу природних антиоксидантів і вітамінів, готових розкрити свої таємниці у вашому чаї, десерті чи варенні. Її гіркувато-солодкий смак додає глибину не лише у випічку чи соуси, а й у домашні напої. Вона приносить у кожну страву дух дикої природи, що надихає і наповнює енергією.",
			variants: [
				{
					id: "elderberry-frozen",
					images: [elderberryImg, elderberryImg2],
				},
			],
		},
		{
			id: "strawberry",
			type: "berry",
			status: "frozen",
			latName: "Fragaria",
			name: t("products.strawberry"),
			origin: "Україна",
			pack: "паперовий мішок 25 кг",
			desc: "Солодка, соковита, з ароматом сонячного ранку, ця полуниця ніби уособлює саму сутність літа. Зібрана в момент повної стиглості, вона заморожується таким чином, щоб зберегти не лише свій яскравий колір, а й усю природну енергію. Кожна ягода, мов невелика вітамінна бомба, дарує свіжий смак та користь у будь-яку пору року. Ця полуниця чудово підходить для десертів, коктейлів, смузі чи просто як освіжаючий перекус. Її смак — це не лише спогад про літо, а й можливість відчути цю безтурботність у будь-який день.",
			variants: [
				{
					id: "strawberry-frozen",
					images: [strawberryImg, strawberryImg2],
				},
			],
		},
		{
			id: "raspberry",
			type: "berry",
			status: "frozen",
			latName: "Rubus idaeus",
			name: t("products.raspberry"),
			origin: "Україна",
			pack: "картонна коробка 10 кг",
			desc: "Зібрана в серці літа, коли вона досягає своєї найвищої стиглості, малина заморожується миттєво, щоб зберегти всі свої яскраві кольори і соковитий смак. Легкий смак кислуватої свіжості, що перетікає в солодкість, дарує відчуття літа, навіть коли на вулиці холодно. Ця малина стане чудовим доповненням до десертів, смузі чи навіть чайних настоїв, даруючи не лише неперевершений смак, але й природну користь, яку принесе з собою кожна ягода. Вона дарує здоров’я і відчуття свіжості з лісу в кожному укусі.",
			variants: [
				{
					id: "raspberry-frozen",
					images: [raspberryImg2, raspberryImg, raspberryImg3],
				},
			],
		},
		{
			id: "apricot",
			type: "fruit",
			status: "frozen",
			latName: "Prunus armeniaca",
			name: t("products.apricot"),
			origin: "Україна",
			pack: "картонна коробка 10 кг",
			desc: "Зібрана в момент повної зрілості, коли абрикоса дарує свою природну солодкість і яскравий аромат, ця ягода зберігає у собі всю енергію сонячних днів. Легкий, фруктовий смак, що поєднується з ніжною текстурою, робить кожен шматочок справжнім задоволенням, навіть у найхолодніші дні. Миттєво заморожена, абрикоса зберігає свої корисні властивості і неперевершений смак, який буде чудовим доповненням до десертів, смузі чи навіть страв із м'яса. Вона додає яскравих фарб у будь-яку страву, даруючи відчуття літа навіть у холодну пору.",
			variants: [
				{
					id: "apricot-frozen",
				},
			],
		},
		{
			id: "sweet-pepper-red",
			type: "vegetable",
			status: "frozen",
			latName: "Capsicum annuum",
			name: t("products.sweet_pepper_red"),
			origin: "Україна",
			pack: "картонна коробка 10 кг",
			desc: "Зібраний на піку стиглості, цей перець набуває неповторної солодкості, яка ідеально поєднується з його м'якою, соковитою текстурою. Завдяки миттєвій заморожуванні, ми зберігаємо всі корисні вітаміни та натуральний аромат, що переносить у світ сонячних літніх днів. Цей перець — не просто інгредієнт, а справжній герой ваших страв: від салатів і супів до запечених овочів або гарячих страв. Він додає не лише яскравого кольору, але й глибокого, солодкого смаку, що дарує енергію та природний аромат кожному рецепту.",
			variants: [
				{
					id: "sweet-pepper-red-frozen-sol",
					state: t("product_page.state_4"),
					images: [sweetPepperImg, sweetPepperImg2],
				},
			],
		},
		{
			id: "sweet-pepper-green",
			type: "vegetable",
			status: "frozen",
			latName: "Capsicum annuum",
			name: t("products.sweet_pepper_green"),
			origin: "Україна",
			pack: "картонна коробка 10 кг",
			desc: "Зібраний, коли перець досягає своєї молодої зрілості, він дарує приємну хрусткість і легку солодкість, що робить його ідеальним доповненням до будь-якої страви. Миттєва заморозка дозволяє зберегти не лише його насичений смак, а й усі корисні властивості, даруючи вам справжню зелень у будь-яку пору року. Цей перець додає барвистого акценту в супи, рагу, салати та гарячі страви. Його легка, але насичена смаковою палітрою текстура робить його чудовим компонентом як для легких закусок, так і для більш складних кулінарних творів. Перець, який оживляє будь-яку страву і приносить із собою свіжість зелених полів.",
			variants: [
				{
					id: "sweet-pepper-green-frozen-sol",
					state: t("product_page.state_4"),
					images: [sweetPepperImg3],
				},
			],
		},
		{
			id: "sweet-pepper-yellow",
			type: "vegetable",
			status: "frozen",
			latName: "Capsicum annuum",
			name: t("products.sweet_pepper_yellow"),
			origin: "Україна",
			pack: "картонна коробка 10 кг",
			desc: "Зібраний в момент повної зрілості, коли перець набуває своєї неперевершеної солодкості та яскравого кольору, він дарує справжній аромат сонячного тепла. Миттєва заморозка зберігає не лише смак, але й усю його природну користь, дозволяючи насолоджуватися свіжістю навіть у холодну пору року. Цей перець ідеально підходить для салатів, соусів, гарячих страв або запечених овочів. Його солодкий смак і соковитість додадуть кольору та глибини будь-якому рецепту, а легка хрустка текстура подарує відчуття свіжості та легкості.",
			variants: [
				{
					id: "sweet-pepper-yellow-frozen-sol",
					images: [sweetPepperImg4],
				},
			],
		},
		{
			id: "boletus",
			type: "mushroom",
			status: "frozen",
			latName: "Boletus edulis",
			name: t("products.boletus"),
			origin: "Україна",
			pack: "картонна коробка 10 кг",
			desc: "Зібраний в тіні старих дерев, білий гриб приносить з собою справжній лісовий аромат, що дарує відчуття спокою та гармонії з природою. Миттєва заморозка дозволяє зберегти його неповторний смак, а також всі корисні властивості, даруючи вам частинку дикої природи в будь-який час року. Цей гриб додає стравам глибину смаку, роблячи їх більш насиченими та ароматними. Від кремових супів і соусів до рагу та піци — білий гриб підкорює своєю елегантною текстурою та вишуканим смаком, що нагадує про літо, проведене в лісі, і спокій лісових прогулянок.",
			variants: [
				{
					id: "boletus-frozen-whole",
					state: t("product_page.state_1"),
					images: [boletusImg, boletusImg4],
				},
				{
					id: "boletus-frozen-slice",
					state: t("product_page.state_2"),
					images: [boletusImg2],
				},
				{
					id: "boletus-frozen-cubic",
					state: t("product_page.state_3"),
					images: [boletusImg3, boletusImg5],
				},
			],
		},
		{
			id: "chanterelle",
			type: "mushroom",
			status: "dried",
			latName: "Cantharellus cibarius",
			name: t("products.chanterelle"),
			origin: "Україна",
			pack: "картонна коробка 10 кг",
			desc: "Ці маленькі лісові скарби, зібрані вручну в чистих лісах, зберігають не лише свій характерний вигляд, а й особливий, ніжний смак, який додає стравам природної елегантності. Миттєва заморозка дозволяє зберегти їхню соковитість і легку, майже хрустку текстуру, а також усі корисні властивості, які дарує природа. Лисички — це гриби з характером. Вони вишукано поєднуються з кремовими соусами, пастою або м'ясними стравами, додаючи їм глибини та вишуканості. Їхній аромат оживляє будь-яку страву, перетворюючи прості рецепти на гастрономічні шедеври.",
			variants: [
				{
					id: "chanterelle-dried",
					images: [chanterelleImg, chanterelleImg2],
				},
			],
		},
		{
			id: "sour-cherry",
			type: "berry",
			status: "frozen",
			latName: "Prunus cerasus",
			name: t("products.sour_cherry"),
			origin: "Україна",
			pack: "картонна коробка 10 кг",
			desc: "Вишня, зібрана в момент своєї повної стиглості, дарує поєднання яскравої кислинки та природної солодкості, що пробуджує спогади про теплі дні. Миттєва заморозка дозволяє зберегти всі смакові відтінки та аромати, які роблять цю ягоду справжнім делікатесом у будь-який сезон. Ця вишня — не просто інгредієнт, а справжня частинка літа. Вона додає яскравості десертам, смузі, випічці або освіжаючим напоям, даруючи відчуття свіжості та легкості в кожному укусу. Літній смак, що живе цілий рік.",
			variants: [
				{
					id: "sour-cherry-fozen-pitted",
					state: t("product_page.state_6"),
					images: [sourCherryImg, sourCherryImg2],
				},
				{
					id: "sour-cherry-frozen-with-stone",
					state: t("product_page.state_5"),
					images: [sourCherryImg3],
				},
			],
		},
		{
			id: "honey-fungus",
			type: "mushroom",
			status: "frozen",
			latName: "Armillaria mellea",
			name: t("products.honey_fungus"),
			origin: "Україна",
			pack: "картонна коробка 10 кг",
			desc: "Зібрані з лісових галявин, де вони вбирають в себе запах хвойних дерев і свіжість землі, опеньки дарують стравам неповторний аромат дикої природи. Миттєва заморозка дозволяє зберегти їхню соковитість, м’якість та природну текстуру, щоб ви могли насолоджуватися цим смаком у будь-яку пору року. Опеньки ідеально підходять для супів, рагу, запіканок чи соусів, додаючи їм глибину та елегантність. Їхній характерний смак з легкою грибною ноткою перетворює будь-яку страву на справжній кулінарний шедевр, який зберігає душу лісу в кожному кусочку.",
			variants: [
				{
					id: "honey-fungus-frozen",
					images: [honeyFungusImg, honeyFungusImg2],
				},
			],
		},
		{
			id: "blackberry",
			type: "berry",
			status: "frozen",
			latName: "Rubus fruticosus",
			name: t("products.blackberry"),
			origin: "Україна",
			desc: "Зібрана в розпал літа, коли її смак досягає максимальної глибини, ожина дарує поєднання солодкої терпкості і лісового аромату, який пробуджує спогади про тихі прогулянки серед дикої природи. Шокова заморозка зберігає всі її корисні властивості, надаючи можливість насолоджуватися свіжістю ягід навіть у холодну пору року. Ця ожина стане чудовим доповненням до десертів, смузі, йогуртів, або просто як освіжаючий перекус. Її глибокий смак і яскравий колір додають кожному рецепту вишуканості і природної насолоди.",
			pack: "картонна коробка 10 кг",
			variants: [
				{
					id: "blackberry-frozen",
					images: [blackberryImg],
				},
			],
		},
		{
			id: "grape",
			type: "berry",
			status: "frozen",
			latName: "Vitis vinifera",
			name: t("products.grape"),
			origin: "Україна",
			pack: "картонна коробка 10 кг",
			desc: "Зібраний у момент повної стиглості, коли кожна ягода набуває свого найкращого смаку та аромату, виноград миттєво заморожується, щоб зберегти всі свої природні соки, яскравий колір і терпкий солодкий смак. Цей виноград — справжнє задоволення для тих, хто цінує неповторну свіжість і натуральний смак ягід. Цей виноград чудово підходить для освіжаючих смузі, десертів або як легкий перекус в спекотні дні. Легкий, соковитий та неймовірно освіжаючий, він дарує відчуття літа і надає стравам особливої легкості та енергії.",
			variants: [
				{
					id: "grape-frozen",
				},
			],
		},
		{
			id: "corn",
			type: "vegetable",
			status: "frozen",
			latName: "Zea mays",
			name: t("products.corn"),
			origin: "Україна",
			pack: "картонна коробка 10 кг",
			desc: "Зібрана на піку своєї зрілості, коли зерна стають соковитими й солодкими, кукурудза миттєво заморожується, щоб зберегти усі природні аромати і смакові відтінки. Її солодкий смак і ніжна текстура дарують справжнє відчуття літа, навіть у найхолодніші місяці. Ця кукурудза — універсальний інгредієнт для супів, салатів, запечених страв чи гарнірів. Її золотистий колір і природна солодкість роблять її чудовим доповненням до будь-якої страви, наповнюючи її яскравими фарбами і смачними нотками природи.",
			variants: [
				{
					id: "corn-frozen",
				},
			],
		},
	];

	return productsData;
};

export default productsData;
