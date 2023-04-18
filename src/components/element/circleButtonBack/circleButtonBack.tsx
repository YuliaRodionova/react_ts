import './circleButtonBack.scss';
import GradientCircleButton from '../gradientCircleButton/gradientCircleButton';
import { useNavigate } from 'react-router-dom';


function CircleButtonBack(): JSX.Element {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(-1)
    };

    return (
        <div className='back'>
            <GradientCircleButton handler={clickHandler} styleClass='back__circle-button' icon={<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_142_2285)">
                    <path d="M9 1L5 5L9 9" stroke="#3F4E65" />
                </g>
                <defs>
                    <filter id="filter0_d_142_2285" x="0.292969" y="0.646484" width="13.0605" height="16.707" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_142_2285" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_142_2285" result="shape" />
                    </filter>
                </defs>
            </svg>} />
            <span className='back__label'>Назад</span>
        </div>
    )
}

export default CircleButtonBack;