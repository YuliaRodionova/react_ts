import "./input.scss";
import Button from "../button/button";


interface IInput {
    styleClass: string,
    text?: string;
    picture?: any;
}

function Input(props: IInput): JSX.Element {
    const { text, picture, styleClass } = props;
    return (
        <form action="/" className="form">
            <input className={styleClass} type="email" name="email" placeholder={text} />
            <Button styleClass="button button__circle form__button" type="submit" picture={picture} />
        </form>
    )
}

export default Input;