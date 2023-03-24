import "./card.scss";
import CartButton from "../../element/cartButton/cartButton";
import TextParamElem from "../../ui/textParamElem/textParamElem";
export interface ICard {
    img: any;
    weightIcon: any;
    weight: number;
    unit: string;
    brand: string;
    productName: string;
    code: number | string;
    producer?: string;
    price: number;
}


function Card(props: ICard): JSX.Element {
    const { img, weightIcon, weight, unit, brand, productName, code, producer, price } = props;
    return (
        <div>
            <img src={img} alt="" />
            <div>
                {weightIcon}
                <p>{weight} {unit}</p>
            </div>
            <h4><span>{brand}</span> {productName}</h4>
            <TextParamElem keyParam="Штрихкод:" valueParam={code} />
            <TextParamElem keyParam="Производитель:" valueParam={producer ? producer : brand} />
            <TextParamElem keyParam="Бренд:" valueParam={brand} />
            <div>
                <p>{price} ₸</p>
                <CartButton />
            </div>
        </div>
    )

}
export default Card