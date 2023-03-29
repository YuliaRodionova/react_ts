import './badge.scss';

interface IBadge {
    type: string;
    text: string | number;
    handler?: any;
}

function Badge(props: IBadge): JSX.Element {
    const { type, text, handler } = props;
    return (
        <input onClick={handler} className='badge' type={type} value={text} />
    )

}
export default Badge