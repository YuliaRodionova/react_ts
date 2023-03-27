import './textParamElem.scss'

interface IParamElem {
    keyParam: string;
    valueParam: string | number;
}

function TextParamElem(props: IParamElem): JSX.Element {
    const { keyParam, valueParam } = props;
    return (
        <p className='param param_description'><span className='param__title card-title '>{keyParam}:</span>{valueParam}</p>
    )

}
export default TextParamElem