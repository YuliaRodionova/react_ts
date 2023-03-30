import { useState } from "react";
import "./product.scss";
import TextParamElem from "../../ui/textParamElem/textParamElem";
import CartButton from "../../element/cartButton/cartButton";
import CountProductChanger from "../../element/countProductChanger/countProductChanger";
import Details from "../../ui/details/details";
import Button from "../../ui/button/button";
import PriceList from "../../element/priceList/priceList";
import { IProduct } from "../../../interfaces/IProduct";
import WeightIcon from "../../element/weightIcon/weightIcon";

function Product(props: IProduct): JSX.Element {
    const { id, img, weight, unit, brand, productName, code, producer, price, available = true, articleNumber, purpose, productType, boxSize, quantityInBox } = props;

    const [count, setCount] = useState<number>(1);

    const toCart = {
        id,
        img,
        weight,
        unit,
        brand,
        productName,
        code,
        price,
        producer,
        count
    }

    return (
        <div className="product">
            <img className="product__img" src={img} alt="" />
            <div className="product__wrapper">
                <p className="product__available">{available == true ? "в наличии" : "нет в наличии"}</p>
                <h4 className="title_xl"><span className="title_xl title_xl_bold">{brand}</span> {productName}</h4>
                <div className="product__weight icon-container">
                    <WeightIcon unit={unit} />
                    <span className="card-title product__weight-title">{weight} {unit}</span>
                </div>
                <div className="product__item">
                    <p className="title_xl title_xl_bold">{price} ₸</p>
                    <CountProductChanger setCount={setCount} leftValue='+' rightValue='-' count={count} />
                    <CartButton productCartItem={toCart} />
                </div>
                <div className="product__item">
                    <Button styleClass="button button__bg-white" picture={<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.00004 15.5C6.87469 15.4974 7.71626 15.1653 8.35704 14.57L14.617 18.147C14.4073 18.9666 14.4998 19.8343 14.8775 20.5913C15.2552 21.3483 15.893 21.9439 16.674 22.2692C17.455 22.5944 18.327 22.6274 19.1304 22.3623C19.9338 22.0971 20.6148 21.5515 21.0488 20.8252C21.4827 20.099 21.6406 19.2408 21.4935 18.4076C21.3464 17.5745 20.9042 16.8222 20.2478 16.2885C19.5914 15.7548 18.7647 15.4753 17.919 15.5013C17.0734 15.5273 16.2655 15.857 15.643 16.43L9.38304 12.853C9.44904 12.603 9.48504 12.344 9.49104 12.085L15.641 8.56996C16.2332 9.10874 16.9927 9.42747 17.792 9.47268C18.5913 9.51789 19.3818 9.28684 20.031 8.81828C20.6802 8.34972 21.1484 7.67217 21.3572 6.89929C21.5661 6.1264 21.5027 5.30522 21.1779 4.5735C20.853 3.84178 20.2864 3.24404 19.5731 2.88056C18.8597 2.51708 18.0431 2.40998 17.2602 2.57723C16.4772 2.74447 15.7756 3.17588 15.2731 3.79909C14.7705 4.42229 14.4976 5.19937 14.5 5.99996C14.504 6.28796 14.543 6.57497 14.617 6.85296L8.93304 10.1C8.60341 9.59003 8.1468 9.17461 7.60805 8.89454C7.06931 8.61446 6.46697 8.47936 5.86021 8.50251C5.25346 8.52566 4.66316 8.70627 4.14732 9.02658C3.63148 9.34689 3.20785 9.79589 2.91804 10.3295C2.62823 10.863 2.48222 11.4628 2.49435 12.0699C2.50648 12.677 2.67634 13.2704 2.98723 13.792C3.29812 14.3136 3.73936 14.7453 4.26758 15.0447C4.7958 15.3442 5.39284 15.5011 6.00004 15.5Z" fill="#FFC85E" />
                    </svg>
                    } />
                    <button className="button button__bg-white button_wrap product__button">При покупке от <span className="product__button_bold">10 000 ₸</span> бесплатная доставка по Кокчетаву и области</button>
                    <PriceList styleClassForLink="button button__bg-white button_gray-icon" />
                </div>
                <TextParamElem keyParam="Производитель" valueParam={producer ? producer : brand} />
                <TextParamElem keyParam="Бренд" valueParam={brand} />
                <TextParamElem keyParam="Артикул" valueParam={articleNumber} />
                <TextParamElem keyParam="Штрихкод" valueParam={code} />
                <Details title="Описание">
                    <p className='details__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.</p>
                </Details>
                <Details title="Характеристики">
                    <TextParamElem keyParam="Назначение" valueParam={purpose ? purpose : brand} />
                    <TextParamElem keyParam="Тип" valueParam={productType ? productType : brand} />
                    <TextParamElem keyParam="Производитель" valueParam={producer ? producer : brand} />
                    <TextParamElem keyParam="Бренд" valueParam={brand} />
                    <TextParamElem keyParam="Артикул" valueParam={articleNumber} />
                    <TextParamElem keyParam="Штрихкод" valueParam={code} />
                    <TextParamElem keyParam="Вес" valueParam={weight} />
                    <TextParamElem keyParam="Объём" valueParam={boxSize ? boxSize : weight} />
                    <TextParamElem keyParam="Количество в коробке" valueParam={quantityInBox ? quantityInBox : weight} />
                </Details>
            </div>
        </div>
    )
}
export default Product