import organicStandardImg from "/assets/certificates/organic-standard.jpg";
import styles from "./OurCertificates.module.scss";

const OurCertificates = () => {
    return (
        <div className={styles["our-certificates"]}>
            <h2 className={styles["our-certificates__title"]}>
                Our certificates
            </h2>
            <img src={organicStandardImg} alt="" />
        </div>
    );
};

export default OurCertificates;
