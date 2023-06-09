import Button from "../../ui/button/button";
import "./header.scss";
import List from "../../element/list/list";
import SearchForm from "../../element/searchForm/searchForm";
import PriceList from "../../element/priceList/priceList";
import CartPriceTotal from "../../element/cartPriceTotal/CartPriceTotal";
import { useSelector } from 'react-redux';
import { RootState } from "../../../lib/store/store";
import { Link } from "react-router-dom";
import ContactInfo from "../../element/contactInfo/contactInfo";

function Header(): JSX.Element {
    const cartList = useSelector((store: RootState) => store.cartList);
    const cartCount = cartList.cartList.length;
    return (
        <div className="header">
            <div className="header__border">
                <div className="header__wrapper">
                    <div className="header__contact">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 10.8335C11.3807 10.8335 12.5 9.71421 12.5 8.3335C12.5 6.95278 11.3807 5.8335 10 5.8335C8.61929 5.8335 7.5 6.95278 7.5 8.3335C7.5 9.71421 8.61929 10.8335 10 10.8335Z" stroke="#3F4E65" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.0002 1.66675C8.23205 1.66675 6.53636 2.36913 5.28612 3.61937C4.03588 4.86961 3.3335 6.5653 3.3335 8.33342C3.3335 9.91008 3.6685 10.9417 4.5835 12.0834L10.0002 18.3334L15.4168 12.0834C16.3318 10.9417 16.6668 9.91008 16.6668 8.33342C16.6668 6.5653 15.9644 4.86961 14.7142 3.61937C13.464 2.36913 11.7683 1.66675 10.0002 1.66675V1.66675Z" stroke="#3F4E65" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div>
                            <p className="header__contact_bold">г. Кокчетав, ул. Ж. Ташенова 129Б
                            </p>
                            <p className="header__contact_lite">(Рынок Восточный)</p>
                        </div>
                    </div>
                    <div className="header__contact">
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.37484 0.333252H14.6248C15.3166 0.333207 15.9822 0.59788 16.485 1.07298C16.9879 1.54808 17.2898 2.19758 17.329 2.88825L17.3332 3.04158V10.9583C17.3332 11.65 17.0685 12.3156 16.5934 12.8184C16.1183 13.3213 15.4688 13.6233 14.7782 13.6624L14.6248 13.6666H3.37484C2.68306 13.6666 2.01748 13.402 1.51464 12.9269C1.01181 12.4518 0.709836 11.8023 0.670671 11.1116L0.666504 10.9583V3.04158C0.666459 2.3498 0.931132 1.68423 1.40623 1.18139C1.88133 0.678558 2.53083 0.376584 3.2215 0.337419L3.37484 0.333252H14.6248H3.37484ZM16.0832 4.81075L9.2915 8.38575C9.21482 8.42626 9.13054 8.45037 9.04402 8.45654C8.95751 8.46271 8.87066 8.4508 8.789 8.42159L8.709 8.38658L1.9165 4.81158V10.9583C1.91652 11.3242 2.05415 11.6768 2.30207 11.9461C2.54999 12.2153 2.89009 12.3815 3.25484 12.4116L3.37484 12.4166H14.6248C14.991 12.4166 15.3437 12.2788 15.6129 12.0307C15.8822 11.7826 16.0483 11.4423 16.0782 11.0774L16.0832 10.9583V4.81075ZM14.6248 1.58325H3.37484C3.00885 1.58327 2.65624 1.72089 2.38701 1.96882C2.11778 2.21674 1.95162 2.55683 1.9215 2.92159L1.9165 3.04158V3.39908L8.99984 7.12659L16.0832 3.39825V3.04158C16.0831 2.67546 15.9454 2.32274 15.6973 2.0535C15.4492 1.78425 15.1089 1.61817 14.744 1.58825L14.6248 1.58325Z" fill="#3F4E65" />
                        </svg>
                        <div>
                            <a href="mailto:opt.sultan@mail.ru" className="header__contact_bold">opt.sultan@mail.ru
                            </a>
                            <p className="header__contact_lite">На связи в любое время</p>
                        </div>
                    </div>
                    <List items={[{ text: 'О компании', link: 'https://dzen.ru/?yredirect=true' }, { text: 'Доставка и оплата', link: 'https://dzen.ru/?yredirect=true' }, { text: 'Возврат', link: 'https://dzen.ru/?yredirect=true' }, { text: 'Контакты', link: 'https://dzen.ru/?yredirect=true' },]} />
                </div>
            </div>
            <div className="header__container">
                <div className="header__item">
                    <Button styleClass='button button__circle header__button_mobile' picture={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>} />
                </div>
                <Link to="/" className="header__item"><img src="/logo.png" alt="логотип" /></Link>
                <div className="header__item header__desktop">
                    <Button text="Каталог" styleClass='button header__button-catalog header__button-catalog_button' picture={<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2C0.5 1.17157 1.17157 0.5 2 0.5Z" stroke="white" />
                        <path d="M9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1C8.5 0.723858 8.72386 0.5 9 0.5Z" stroke="white" />
                        <path d="M9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9C8.5 8.72386 8.72386 8.5 9 8.5Z" stroke="white" />
                        <path d="M1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9C0.5 8.72386 0.723858 8.5 1 8.5Z" stroke="white" />
                    </svg>} />
                    <Link to="/Catalogue" className="button header__button-catalog header__button-catalog_link">Каталог
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2C0.5 1.17157 1.17157 0.5 2 0.5Z" stroke="white" />
                            <path d="M9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1C8.5 0.723858 8.72386 0.5 9 0.5Z" stroke="white" />
                            <path d="M9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9C8.5 8.72386 8.72386 8.5 9 8.5Z" stroke="white" />
                            <path d="M1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9C0.5 8.72386 0.723858 8.5 1 8.5Z" stroke="white" />
                        </svg>
                    </Link>
                    <SearchForm />
                    <PriceList styleClassForLink="button button_white-icon" />
                    <div className="header__contact">
                        <div className="header__contact-info">
                            <ContactInfo styleClassLink="header__contact-link" />
                        </div>
                        <div className="header__contact-img">
                            <img src="/contactImg.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="header__item">
                    <Link to="/Cart" className="header__item count__wrapper">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6366 7.49241C22.4954 7.29518 22.3059 7.19656 22.0682 7.19656H6.9325L6.52171 6.12711C6.41768 5.77648 6.2765 5.47698 6.09818 5.22862C5.91985 4.98025 5.73037 4.80494 5.52975 4.70267C5.32913 4.6004 5.15452 4.53101 5.00591 4.49448C4.8573 4.45796 4.7087 4.4397 4.56009 4.4397H1.50621C1.31302 4.4397 1.14955 4.50544 1.01581 4.63693C0.882059 4.76841 0.815186 4.93642 0.815186 5.14096C0.815186 5.25784 0.844907 5.37106 0.90435 5.48063C0.963793 5.59021 1.04924 5.67421 1.1607 5.73265C1.27215 5.79109 1.38732 5.82031 1.50621 5.82031H4.56009C4.61953 5.82031 4.67526 5.82761 4.72727 5.84222C4.77929 5.85683 4.84987 5.91892 4.93904 6.02849C5.0282 6.13807 5.10251 6.30242 5.16195 6.52157L8.35913 15.3005C8.38885 15.3882 8.43715 15.4722 8.50402 15.5525C8.5709 15.6329 8.64891 15.695 8.73808 15.7388C8.82724 15.7826 8.92384 15.8045 9.02786 15.8045H18.6576C18.8062 15.8045 18.9437 15.7607 19.07 15.673C19.1963 15.5854 19.2818 15.4758 19.3263 15.3443L22.7369 8.13888C22.8112 7.90513 22.7778 7.68964 22.6366 7.49241ZM18.1672 14.402H9.58514L7.31145 8.59908H21.0428L18.1672 14.402ZM16.8818 16.565C16.3914 16.565 15.9715 16.7367 15.6223 17.08C15.2731 17.4234 15.0985 17.8361 15.0985 18.3182C15.0985 18.8003 15.2731 19.2131 15.6223 19.5564C15.9715 19.8997 16.3914 20.0714 16.8818 20.0714C17.3722 20.0714 17.792 19.8997 18.1412 19.5564C18.4904 19.2131 18.665 18.8003 18.665 18.3182C18.665 17.8361 18.4904 17.4234 18.1412 17.08C17.792 16.7367 17.3722 16.565 16.8818 16.565ZM10.4619 16.565C10.135 16.565 9.83406 16.6454 9.55913 16.8061C9.28421 16.9668 9.06873 17.1787 8.91269 17.4416C8.75665 17.7046 8.67864 17.9968 8.67864 18.3182C8.67864 18.8003 8.85325 19.2131 9.20248 19.5564C9.5517 19.8997 9.97152 20.0714 10.4619 20.0714C10.9523 20.0714 11.3721 19.8997 11.7214 19.5564C12.0706 19.2131 12.2452 18.8003 12.2452 18.3182C12.2452 18.2013 12.2341 18.0845 12.2118 17.9676C12.1895 17.8507 12.156 17.7411 12.1115 17.6389C12.0669 17.5366 12.0112 17.438 11.9443 17.343C11.8774 17.2481 11.8031 17.1604 11.7214 17.08C11.6396 16.9997 11.5505 16.9266 11.4539 16.8609C11.3573 16.7951 11.257 16.7404 11.1529 16.6965C11.0489 16.6527 10.9375 16.6198 10.8186 16.5979C10.6997 16.576 10.5808 16.565 10.4619 16.565Z" fill="#3F4E65" />
                        </svg>
                        <span className="count">{cartCount}</span>
                    </Link>
                    {cartCount > 0 && <Link to="/Cart" className="header__cart-count">
                        <p className="card-title">Корзина</p>
                        <p className="title_xs"><CartPriceTotal /> ₸ </p>
                    </Link>}
                </div>

                <Link to="/Admin" className="card-title">Админка</Link>
            </div>
            <div className="header__elems">
                <Button styleClass='button__bg-inherit header__button' picture={<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2Z" stroke="#3F4E65" />
                    <path d="M8.5 1C8.5 0.723858 8.72386 0.5 9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1Z" stroke="#3F4E65" />
                    <path d="M8.5 9C8.5 8.72386 8.72386 8.5 9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9Z" stroke="#3F4E65" />
                    <path d="M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9Z" stroke="#3F4E65" />
                </svg>} text="Каталог" />
                <label htmlFor="mainSearch" className="header__label">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.125 13.125L10.3212 10.3162L13.125 13.125ZM11.875 6.5625C11.875 7.97146 11.3153 9.32272 10.319 10.319C9.32272 11.3153 7.97146 11.875 6.5625 11.875C5.15354 11.875 3.80228 11.3153 2.806 10.319C1.80971 9.32272 1.25 7.97146 1.25 6.5625C1.25 5.15354 1.80971 3.80228 2.806 2.806C3.80228 1.80971 5.15354 1.25 6.5625 1.25C7.97146 1.25 9.32272 1.80971 10.319 2.806C11.3153 3.80228 11.875 5.15354 11.875 6.5625V6.5625Z" stroke="#3F4E65" strokeLinecap="round" />
                    </svg>
                    <input type="search" id="mainSearch" placeholder="Поиск" className="header__input" />
                </label>

            </div>
        </div>
    )

}

export default Header;