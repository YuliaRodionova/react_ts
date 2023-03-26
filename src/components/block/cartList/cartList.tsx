import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store/store';
import CartItem from '../cartItem/cartItem';

function CartList(): JSX.Element {
    const cartList = useSelector((store: RootState) => store.cartList);
    const cartListElems = cartList ? cartList.cartList.map(product => {
        return <CartItem key={product.id} cartItem={product} />
    }) : [];
    return (
        <>
            <h2>Корзина</h2>
            {cartListElems.length > 0 ? cartListElems : <p>Корзина пуста</p>}
        </>
    );
}

export default CartList;
