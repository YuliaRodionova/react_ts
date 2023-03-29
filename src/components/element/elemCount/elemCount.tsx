import './elemCount.scss';
import Badge from '../../ui/badge/badge';

interface IElemCount {
    leftValue: string | number,
    rightValue: string | number,
    count: string,
    type: string
}

function ElemCount(props: IElemCount): JSX.Element {
    const { leftValue, rightValue, count, type } = props;

    return (
        <div className='elems-count'>
            <Badge type={type} text={leftValue} />
            <span>{count}</span>
            <Badge type={type} text={rightValue} />
        </div>
    )

}
export default ElemCount;