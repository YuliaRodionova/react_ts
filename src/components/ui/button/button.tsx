import React from 'react';
import './button.scss';

interface IButton {
    styleClass: string;
    text?: string;
    picture?: any;
}

function Button(props: IButton): JSX.Element {
    const { styleClass, text, picture } = props;
    return (
        <button className={styleClass}> {text} {picture}
        </button >
    )
}

export default Button;