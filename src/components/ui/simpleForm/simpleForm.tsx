import "./simpleForm.scss";
import Button from "../button/button";


interface IInput {
    styleClass: string,
    type: string,
    name: string,
    text?: string,
    picture?: any,
    handler?: any,
    handlerEventType?: string,
}

function SimpleForm(props: IInput): JSX.Element {
    const { text, type, picture, styleClass, name, handler } = props;
    return (
        <form onSubmit={handler} action="/" className="form">
            <input className={styleClass} type={type} name={name} placeholder={text} />
            <Button styleClass="button button__circle form__button" type="submit" picture={picture} />
        </form>
    )
}

export default SimpleForm;