import './textParamElem.scss'

interface IParamElem {
    keyParam: string;
    valueParam: string | number | [string];
}

function TextParamElem(props: IParamElem): JSX.Element {
    const { keyParam, valueParam } = props;
    return (
        <p className='param param_description'><span className='param param_title'>{keyParam}:</span>{valueParam}</p>
    )

}
export default TextParamElem