import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../../lib/actions/actionCreators";
import TextParamElem from "../../ui/textParamElem/textParamElem";
import Button from "../../ui/button/button";
import { ICartItem } from "../../../interfaces/ICartItem";
interface ICartProductItem {
    cartItem: ICartItem,
}

function CartItem({ cartItem }: ICartProductItem): JSX.Element {
    const { id, img, weightIcon, weight, unit, brand, productName, code, producer, price } = cartItem;

    const dispatch = useDispatch();

    const deleteFromCartHandler = () => {
        dispatch(deleteFromCart(id))
    }

    return (
        <div>
            {/* <img src={img} alt="" /> */}
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
                <Button handlerClick={deleteFromCartHandler} styleClass="button" text="Удалить" />
            </div>
        </div>
    )

}
export default CartItem;