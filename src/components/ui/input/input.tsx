import "./input.scss";
import Button from "../button/button";


interface IInput {
    text?: string;
    picture?: any;
}

function Input(props: IInput): JSX.Element {
    const { text, picture } = props;
    return (
        <form action="/" className="form">
            <input className="button form__input" type="email" name="email" placeholder={text} />
            <Button styleClass="button button__circle form__button" type="submit" picture={picture} />
        </form>
    )
}

export default Input;