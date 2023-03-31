import { useState } from 'react';
import { changeCart, deleteFromCart } from '../../../lib/actions/actionCreators';
import { useDispatch } from 'react-redux';
import Badge from '../../ui/badge/badge';

interface ICountCartChanger {
    leftValue: string | number,
    rightValue: string | number,
    count: number,
    productId: number
}

function CountCartChanger(props: ICountCartChanger): JSX.Element {
    const { leftValue, rightValue, count, productId } = props;
    const [currentCount, setCurrentCount] = useState<number>(count);
    const dispatch = useDispatch();

    const countPlusHandler = () => {
        setCurrentCount(currentCount + 1);
        dispatch(changeCart(productId, 'plus'));
    }

    const countMinusHandler = () => {
        if (currentCount !== 1) {
            setCurrentCount(currentCount - 1);
            dispatch(changeCart(productId, 'minus'));
        } else {
            dispatch(deleteFromCart(productId));
        }
    }

    return (
        <div className='elems-count'>
            <Badge handler={countPlusHandler} text={leftValue} />
            <span>{currentCount}</span>
            <Badge handler={countMinusHandler} text={rightValue} />
        </div>
    )

}
export default CountCartChanger;