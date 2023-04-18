import "./checkbox.scss"

interface ICheckbox {
    label: string;
    checked?: boolean;
    handler?: any;
}

function Checkbox(props: ICheckbox): JSX.Element {
    const { label, checked, handler } = props;
    return (
        <label className="checkbox__label label-title">
            <input onChange={handler} className="checkbox" type="checkbox" checked={checked} />
            {label}
        </label>
    );

}
export default Checkbox;