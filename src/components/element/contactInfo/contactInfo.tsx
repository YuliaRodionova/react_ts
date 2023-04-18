import './contactInfo.scss';

interface IContactInfo {
    styleClassTitle?: string;
    styleClassText?: string;
    styleClassLink?: string;
}

function ContactInfo({ styleClassTitle, styleClassText, styleClassLink }: IContactInfo): JSX.Element {
    return (
        <>
            <a href='tel:+77774900091' className={`contact__title ${styleClassTitle}`}>+7 (777) 490-00-91</a>
            <p className={`contact__text ${styleClassText}`}>время работы: 9:00-20:00</p>
            <a className={`contact__link ${styleClassLink}`} href="#">Заказать звонок</a>
        </>
    )
}

export default ContactInfo;