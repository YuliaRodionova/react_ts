import './badge.scss';

interface IBadge {
    text: string | number;
    handler?: any;
    handlerEventType?: string;
}

function Badge(props: IBadge): JSX.Element {
    const { text = '', handler } = props;
    return (
        <input onClick={handler} className='badge' type='button' defaultValue={text} />
    )

}
export default Badge