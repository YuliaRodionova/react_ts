import "./footer.scss";
import Button from "../../ui/button/button";
import List from "../../element/list/list";
import SimpleForm from "../../ui/simpleForm/simpleForm";
import PriceList from "../../element/priceList/priceList";
import ContactInfo from "../../element/contactInfo/contactInfo";

function Footer(): JSX.Element {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__wrapper">
                    <img className="footer__logo" src="/logoFooter.png" alt="лого" />
                    <PriceList styleClassForLink="button footer__download footer__download_min" />
                    <h2 className="footer__text">Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве
                        и Акмолинской области</h2>
                    <h3 className="footer__text">Подпишись на скидки и акции</h3>
                    <SimpleForm type="email" name="subscribe" styleClass="button form__input form__input_gray" text="Введите ваш E-mail" picture={<svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12.8571L5 7.5L0 2.14286L1 0L8 7.5L1 15L0 12.8571Z" fill="white" />
                    </svg>} />
                </div>
                <List title="Меню сайта" items={[{ text: 'О компании', link: 'https://dzen.ru/?yredirect=true' }, { text: 'Доставка и оплата', link: 'https://dzen.ru/?yredirect=true' }, { text: 'Возврат', link: 'https://dzen.ru/?yredirect=true' }, { text: 'Контакты', link: 'https://dzen.ru/?yredirect=true' },]} />
                <List title="Категории" items={[{ text: 'Бытовая химия', link: 'https://dzen.ru/?yredirect=true' }, { text: 'Косметика и гигиена', link: 'https://dzen.ru/?yredirect=true' }, { text: 'Товары для дома', link: 'https://dzen.ru/?yredirect=true' }, { text: 'Товары для детей и мам', link: 'https://dzen.ru/?yredirect=true' }, { text: 'Посуда', link: 'https://dzen.ru/?yredirect=true' },]} />
                <div className="footer__contact">
                    <h3 className="footer__title-contact">Контакты:</h3>
                    <ContactInfo styleClassLink="footer__link" />
                    <p><a href="mailto:opt.sultan@mail.ru" className="footer__contact-title">opt.sultan@mail.ru</a></p>
                    <p className="footer__contact-text">На связи в любое время</p>
                    <div className="footer__contact-container">
                        <img src="/Visa.jpg" alt="" />
                        <img src="/masterCard.jpg" alt="" />
                    </div>
                </div>
                <div className="footer__contact footer__contact-container">
                    <div className="footer__download_max">
                        <h3 className="footer__title-contact title">Скачать прайс-лист:</h3>
                        <PriceList styleClassForLink="button button_white-icon footer__download" />
                    </div>
                    <h4 className="footer__contact-title title_min">Связь
                        в мессенджерах:</h4>
                    <div className="footer__social-icons">
                        <div className="icon icon_circle icon_green icon_min">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.6784 3.35675C17.5476 1.18112 14.6022 0 11.594 0C5.20169 0 0.06271 5.15944 0.12533 11.4378C0.12533 13.427 0.68936 15.3541 1.62947 17.0946L0 23L6.079 21.4459C7.77109 22.3784 9.65113 22.8136 11.5314 22.8136C17.861 22.8136 23 17.654 23 11.3758C23 8.32976 21.8092 5.47027 19.6785 3.35675H19.6784ZM11.594 20.8866C9.90189 20.8866 8.20979 20.4515 6.76836 19.5812L6.39237 19.3947L2.75753 20.3271L3.69755 16.7839L3.44689 16.4109C0.68936 11.9974 2.00546 6.15404 6.5177 3.41886C11.0299 0.683773 16.8583 1.98921 19.6158 6.46487C22.3733 10.9405 21.0572 16.7216 16.545 19.4568C15.1035 20.3892 13.3488 20.8865 11.594 20.8865V20.8866ZM17.1089 13.9866L16.4196 13.6758C16.4196 13.6758 15.4169 13.2407 14.7902 12.9298C14.7275 12.9298 14.6649 12.8676 14.6022 12.8676C14.4141 12.8676 14.2888 12.9298 14.1635 12.992C14.1635 12.992 14.1008 13.0541 13.2234 14.0488C13.1607 14.1731 13.0354 14.2353 12.9101 14.2353H12.8474C12.7847 14.2353 12.6594 14.1731 12.5967 14.111L12.2833 13.9866C11.594 13.6758 10.9673 13.3028 10.4659 12.8055C10.3406 12.6812 10.1525 12.5569 10.0272 12.4326C9.58851 11.9974 9.14981 11.5001 8.83653 10.9406L8.77382 10.8163C8.7112 10.7541 8.7112 10.692 8.64849 10.5677C8.64849 10.4434 8.64849 10.3191 8.7112 10.2569C8.7112 10.2569 8.96186 9.94603 9.14981 9.7596C9.27523 9.6352 9.33785 9.44877 9.46318 9.32446C9.58851 9.13794 9.65122 8.88931 9.58851 8.7028C9.52589 8.39197 8.77382 6.71359 8.58587 6.34065C8.46045 6.15413 8.33521 6.09202 8.14717 6.02982H7.45781C7.33239 6.02982 7.20715 6.09202 7.08173 6.09202L7.01902 6.15413C6.89369 6.21633 6.76836 6.34065 6.64303 6.40276C6.5177 6.52716 6.45499 6.65139 6.32966 6.77579C5.89096 7.33525 5.6403 8.01902 5.6403 8.7028C5.6403 9.20005 5.76563 9.6974 5.95367 10.1325L6.01638 10.3191C6.58041 11.5001 7.33239 12.5569 8.33521 13.4893L8.58587 13.7379C8.77382 13.9244 8.96186 14.0488 9.08719 14.2352C10.4033 15.3542 11.9073 16.1623 13.5994 16.5974C13.7875 16.6595 14.0381 16.6595 14.2262 16.7217H14.8528C15.1662 16.7217 15.5422 16.5974 15.7929 16.4731C15.9809 16.3488 16.1062 16.3488 16.2315 16.2245L16.357 16.1001C16.4823 15.9758 16.6076 15.9136 16.733 15.7893C16.8583 15.665 16.9836 15.5407 17.0463 15.4163C17.1717 15.1677 17.2343 14.8568 17.297 14.5461V14.111C17.297 14.111 17.2343 14.0488 17.1089 13.9866V13.9866Z" fill="white" />
                            </svg>
                        </div>
                        <div className="icon icon_circle icon_blue">
                            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.9884 11.2169L25.5054 28.7774C25.5054 28.7774 25.0183 29.9953 23.6788 29.4107L15.6414 23.2487L12.7188 21.8362L7.79905 20.1799C7.79905 20.1799 7.04404 19.9121 6.97091 19.3275C6.89779 18.743 7.82343 18.4264 7.82343 18.4264L27.3807 10.7544C27.3807 10.7544 28.9882 10.0481 28.9882 11.2172" fill="white" />
                                <path d="M15.0237 28.5799C15.0237 28.5799 14.7891 28.558 14.4966 27.6324C14.2046 26.7069 12.7188 21.8358 12.7188 21.8358L24.5312 14.3344C24.5312 14.3344 25.2132 13.9204 25.1888 14.3344C25.1888 14.3344 25.3106 14.4075 24.9451 14.7485C24.5799 15.0896 15.6658 23.1024 15.6658 23.1024" fill="#D2E5F1" />
                                <path d="M18.7228 25.6112L15.5438 28.5097C15.5438 28.5097 15.2952 28.6983 15.0234 28.5801L15.6322 23.1963" fill="#B5CFE4" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;