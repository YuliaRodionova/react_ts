import './cartList.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../../../lib/store/store';
import CartPriceTotal from '../../element/cartPriceTotal/CartPriceTotal';
import CartItem from '../cartItem/cartItem';
import Button from '../../ui/button/button';
import { clearCart } from '../../../lib/actions/actionCreators';

function CartList(): JSX.Element {
    const [orderIsDone, setOrderIsDone] = useState(false);
    const cartList = useSelector((store: RootState) => store.cartList);
    const dispatch = useDispatch();
    const cartListElems = cartList ? cartList.cartList.map(product => {
        return <CartItem key={product.id} cartItem={product} />
    }) : [];

    const clearCartHandler = () => {
        dispatch(clearCart());
        setOrderIsDone(true);
    }
    return (
        <>
            <h2 className='section-title'>Корзина</h2>
            <div className='cart__list'>
                {cartListElems.length > 0 && cartListElems}
                {orderIsDone && <p>Спасибо за заказ!</p>}
                {!orderIsDone && cartListElems.length === 0 && <p>Корзина пуста</p>}
            </div>
            <div className='cart__footer'>
                {cartListElems.length > 0 && <Button handlerClick={clearCartHandler} styleClass='button cart__button' text='Оформить заказ' />}
                {cartListElems.length > 0 && <div className='cart__sum'><CartPriceTotal /> ₸</div>}
            </div>
        </>
    );
}

export default CartList;
