import './breadCrumbs.scss'
import { Link } from "react-router-dom";

interface IBreadCrumbs {
    linkUrl?: string,
    linkTitle?: string,
    classDashed?: string
}

function BreadCrumbs({ linkUrl, linkTitle, classDashed }: IBreadCrumbs): JSX.Element {
    return (

        <>
            <Link to="/" className='breadcrumbs right-border-dashed'>Главная</Link>
            {linkUrl && <Link to={linkUrl} className={`breadcrumbs ${classDashed}`}>Каталог</Link >}
            {linkTitle && <span className='breadcrumbs breadcrumbs__active'>{linkTitle}</span>
            }

        </>
    )
}
export default BreadCrumbs