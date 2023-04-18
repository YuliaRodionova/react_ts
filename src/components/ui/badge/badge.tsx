import './badge.scss';

interface IBadge {
    text: string | number;
    handler?: any;
    handlerEventType?: string;
    testid?: string | number;
}

function Badge(props: IBadge): JSX.Element {
    const { text = '', handler, testid } = props;
    return (
        <input data-testid={testid} onClick={handler} className='badge' type='button' defaultValue={text} />
    );

}
export default Badge;