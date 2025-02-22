import PageTitle from "../../components/PageTitle/PageTitle";
import "./Contacts.scss";

const Contacts = () => {
    return (
        <>
            <div className="contacts-container" id="contacts">
                <PageTitle name="Контакти" />
                <div className="contacts-icons-container">
                    <div className="icon-container">
                        <i className="fa-solid fa-phone"></i>
                        <p>+38 (096) 806 55 13</p>
                    </div>
                    <div className="icon-container">
                        <i className="fa-solid fa-envelope"></i>
                        <p>dordyaysberries@gmail.com</p>
                    </div>
                    <div className="icon-container">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="c-address">
                            вул. Центральна, 34Б, с. Вільхівці, Тячівський р-н,
                            Закарпатська обл., Україна, 90542
                        </p>
                    </div>
                </div>
            </div>
            <div className="form-map-container">
                <form
                    className="form"
                    action="mailto:hokageow@icloud.com"
                    method="post"
                    encType="text/plain"
                >
                    <div className="inputs__wrapper">
                        <p className="form-info">Зв'яжіться з нами</p>
                        <div className="input-container">
                            <label htmlFor="first-name">Ім'я</label>
                            <input
                                id="first-name"
                                className="input1"
                                type="text"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="last-name">Прізвище</label>
                            <input
                                id="last-name"
                                className="input2"
                                type="text"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="tel">Номер телефону</label>
                            <input id="tel" className="input3" type="tel" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="message">Повідомлення</label>
                            <textarea
                                className="input4"
                                name=""
                                id="message"
                                cols="10"
                                rows="10"
                            ></textarea>
                        </div>
                    </div>
                    <button className="form-submit-btn" type="submit">
                        Відправити
                    </button>
                </form>
                <div className="google-map__wrapper">
                    <p className="google-map__title">Де нас знайти</p>
                    <iframe
                        className="location-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d666.0764004226559!2d23.74658175529479!3d48.10434021444485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47379f8eb1dc7f03%3A0x6e39e1068f4cb4a!2sYagoda%20Karpat%2C%20LLC!5e0!3m2!1sen!2sua!4v1722068818836!5m2!1sen!2sua"
                    ></iframe>
                </div>
            </div>
        </>
    );
};
export default Contacts;
