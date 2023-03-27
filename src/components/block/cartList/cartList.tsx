import './cartList.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store/store';
import CartItem from '../cartItem/cartItem';
import Button from '../../ui/button/button';

function CartList(): JSX.Element {
    const cartList = useSelector((store: RootState) => store.cartList);
    const cartListElems = cartList ? cartList.cartList.map(product => {
        return <CartItem key={product.id} cartItem={product} />
    }) : [];
    return (
        <>
            <h2 className='section-title'>Корзина</h2>
            <div className='cart__list'>
                {cartListElems.length > 0 ? cartListElems : <p>Корзина пуста</p>}
            </div>
            <div className='cart__footer'>
                <div className='cart__sum'>1458476 ₸</div>
                <Button styleClass='button cart__button' text='Оформить заказ' />
            </div>
        </>
    );
}

export default CartList;
