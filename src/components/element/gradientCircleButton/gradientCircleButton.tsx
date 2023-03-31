import './gradientCircleButton.scss';
import Button from '../../ui/button/button';

interface IGradientCircleButton {
    icon: any,
    styleClass: string,
    handler?: any
}

function GradientCircleButton({ icon, styleClass, handler }: IGradientCircleButton): JSX.Element {
    return (
        <Button styleClass={`button button__circle gradient-circle-button ${styleClass ? styleClass : ""}`} picture={icon} handlerClick={handler} />

    )
}

export default GradientCircleButton