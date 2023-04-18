
import Badge from '../../ui/badge/badge';

interface ICountProductChanger {
    leftValue: string | number;
    rightValue: string | number;
    count: number;
    setCount: any;
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
            <Badge handler={countPlusHandler} text={leftValue} />
            <span className='elems-count__num'>{count}</span>
            <Badge handler={countMinusHandler} text={rightValue} />
        </div>
    )

}
export default CountProductChanger;