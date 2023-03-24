import "./details.scss"

interface IDetails {
    title: string;
    description: string | any;
}

function Details(props: IDetails): JSX.Element {
    const { title, description } = props;
    return (
        <details className='details'>
            <summary className='details__title'>{title}</summary>
            <p className='details__description'>{description}</p>
        </details>
    )

}
export default Details