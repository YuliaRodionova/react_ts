import './fieldset.scss';

interface IFieldset{
    labelName?: string;
    htmlForValue?: string;
    children: JSX.Element;
}
function Fieldset(props: IFieldset): JSX.Element {
    const { htmlForValue, children, labelName } = props;

    return (
    <fieldset className='fieldset'>
        <label className='card-title' htmlFor={htmlForValue}>{labelName}</label>
            {children}
    </fieldset>
    )
}

export default Fieldset;