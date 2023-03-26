import "./card.scss";
import CartButton from "../../element/cartButton/cartButton";
import TextParamElem from "../../ui/textParamElem/textParamElem";
import { ICard } from "../../../interfaces/ICard";
interface ICardProductItem {
    productItem: ICard,
}

function Card({ productItem }: ICardProductItem): JSX.Element {
    const { id, img, weightIcon, weight, unit, brand, productName, code, producer, price } = productItem;

    const productCartItem = {
        ...productItem,
        count: 1
    }
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
                <CartButton productCartItem={productCartItem} />
            </div>
        </div>
    )

}
export default Card