import "./card.scss";
import CartButton from "../../element/cartButton/cartButton";
import TextParamElem from "../../ui/textParamElem/textParamElem";
import { ICard } from "../../../interfaces/ICard";
import { Link } from "react-router-dom";
import WeightIcon from "../../element/weightIcon/weightIcon";
interface ICardProductItem {
    productItem: ICard,
}

function Card({ productItem }: ICardProductItem): JSX.Element {
    const { id, img, weight, unit, brand, productName, code, producer, price } = productItem;

    const productCartItem = {
        ...productItem,
        count: 1
    }
    return (
        <div className="card">
            <img className="card__img" src={img} alt="" />
            <div className="icon-container">
                <WeightIcon unit={unit} />
                <span className="card-title">{weight} {unit}</span>
            </div>
            <Link to={`/Catalogue/${id}`} className="card__title"><span className="card__title_bold">{brand}</span> {productName}</Link>
            <TextParamElem keyParam="Штрихкод" valueParam={code} />
            <TextParamElem keyParam="Производитель" valueParam={producer ? producer : brand} />
            <TextParamElem keyParam="Бренд" valueParam={brand} />
            <div className="card__footer">
                <p className="card__price">{price} ₸</p>
                <CartButton productCartItem={productCartItem} styleClass="button_min" />
            </div>
        </div>
    )

}
export default Card