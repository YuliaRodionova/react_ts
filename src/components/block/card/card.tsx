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
        <div className="card">
            <img className="card__img" src={img} alt="" />
            <div>
                {weightIcon}
                <p className="card-title">{weight} {unit}</p>
            </div>
            <h4 className="card__title"><span className="card__title_bold">{brand}</span> {productName}</h4>
            <TextParamElem keyParam="Штрихкод" valueParam={code} />
            <TextParamElem keyParam="Производитель" valueParam={producer ? producer : brand} />
            <TextParamElem keyParam="Бренд" valueParam={brand} />
            <div className="card__footer">
                <p className="card__price">{price} ₸</p>
                <CartButton productCartItem={productCartItem} />
            </div>
        </div>
    )

}
export default Card