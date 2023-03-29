import { useDispatch } from 'react-redux';
import Badge from '../../ui/badge/badge';

interface ICountProductChanger {
    leftValue: string | number,
    rightValue: string | number,
    count: number,
    setCount: any
}

function CountProductChanger(props: ICountProductChanger): JSX.Element {
    const { leftValue, rightValue, count, setCount } = props;

    const countPlusHandler = () => {
        setCount(count + 1);
    }

    const countMinusHandler = () => {
        if (count !== 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className='elems-count'>
            <Badge handler={countPlusHandler} type='button' text={leftValue} />
            <span>{count}</span>
            <Badge handler={countMinusHandler} type='button' text={rightValue} />
        </div>
    )

}
export default CountProductChanger;