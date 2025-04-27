import styles from "./BusinessHours.module.scss";

const BusinessHours = () => {
	const date = new Date();

	const dayNow = date.getDay();

	const activeDay = styles["day--active"];

	return (
		<div className={styles["business-hours"]}>
			<h2 className={styles["business-hours__title"]}>Business hours</h2>
			<ul className={styles["business-hours__list"]}>
				<li className={dayNow == 1 ? activeDay : ""}>
					<span>Monday:</span> <span>8:00 - 19:00</span>
				</li>
				<li className={dayNow == 2 ? activeDay : ""}>
					<span>Tuesday:</span> <span>8:00 - 19:00</span>
				</li>
				<li className={dayNow == 3 ? activeDay : ""}>
					<span>Wednesday:</span> <span>8:00 - 19:00</span>
				</li>
				<li className={dayNow == 4 ? activeDay : ""}>
					<span>Thursday:</span> <span>8:00 - 19:00</span>
				</li>
				<li className={dayNow == 5 ? activeDay : ""}>
					<span>Friday:</span> <span>8:00 - 19:00</span>
				</li>
				<li className={dayNow == 6 ? activeDay : ""}>
					<span>Saturday:</span> <span>8:00 - 19:00</span>
				</li>
				<li className={dayNow == 0 ? activeDay : ""}>
					<span>Sunday:</span> <span>8:00 - 19:00</span>
				</li>
			</ul>
		</div>
	);
};

export default BusinessHours;
