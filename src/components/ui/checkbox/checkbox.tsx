import "./checkbox.scss"

interface ICheckbox {
    label: string,
    checked?: boolean,
}

function Checkbox(props: ICheckbox): JSX.Element {
    const { label, checked } = props;
    return (
        <label className="checkbox__label">
            <input className="checkbox" type="checkbox" checked={checked} />{label}</label>
    )

}
export default Checkbox