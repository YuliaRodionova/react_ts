import './elemCount.scss'
import Badge from '../../ui/badge/badge';

interface IElemCount {
    leftValue: string | number,
    rightValue: string | number,
    count: string,
    type: string
}

function ElemCount(props: IElemCount): JSX.Element {
    const { leftValue, rightValue, count, type } = props;

    const changeHandler = () => {

    }

    return (
        <div className='elems-count'>
            <Badge handler={changeHandler} text={leftValue} />
            <span className='elems-count__num'>{count}</span>
            <Badge handler={changeHandler} text={rightValue} />
        </div>
    )

}
export default ElemCount;