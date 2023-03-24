import './badge.scss';

interface IBadge {
    type: string;
    text: string;
}

function Badge(props: IBadge): JSX.Element {
    const { type, text } = props;
    return (
        <input className='badge' type={type} value={text} />
    )

}
export default Badge