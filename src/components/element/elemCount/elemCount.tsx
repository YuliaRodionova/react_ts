import './elemCount.scss';
import Badge from '../../ui/badge/badge';

function ElemCount(): JSX.Element {

    return (
        <div>
            <Badge type='button' text='+' />
            <span>1</span>
            <Badge type='button' text='-' />
        </div>
    )

}
export default ElemCount