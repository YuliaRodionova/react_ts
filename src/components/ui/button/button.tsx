import React from 'react';
import './button.scss';

interface IButton {
    styleClass: string;
    text?: string;
    picture?: any;
    type?: string;
    handlerClick?: any;
}

function Button(props: IButton): JSX.Element {
    const { styleClass, text, picture, handlerClick } = props;
    return (
        <button onClick={handlerClick} className={styleClass}> {text} {picture}
        </button >
    )
}

export default Button;