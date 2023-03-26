import "./details.scss"

interface IDetails {
    title: string;
    children: string | any;
}

function Details(props: IDetails): JSX.Element {
    const { title, children } = props;
    return (
        <details className='details'>
            <summary className='details__title'>{title}</summary>
            {children}
        </details>
    )

}
export default Details