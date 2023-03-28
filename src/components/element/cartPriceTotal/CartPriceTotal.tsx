import { useSelector } from 'react-redux';
import { RootState } from "../../../lib/store/store";

function СartPriceTotal(): JSX.Element {

    const cart = useSelector((store: RootState) => store.cartList.cartList)

    const cartPriceTotal = cart.length > 0 ? cart.reduce((summ, item) => {
        return summ += item.price;
    }, 0) : 0;

    return <span>{cartPriceTotal.toFixed(1)}</span>
}

export default СartPriceTotal;