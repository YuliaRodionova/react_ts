import Header from "../../block/header/header";
import Footer from "../../block/footer/footer";

interface IPageLayout {
    classStyle?: string,
    children: JSX.Element;
}

function PageLayout(props: IPageLayout): JSX.Element {
    const { classStyle, children } = props;

    return (
        <>
            <Header />
            <div className={`page-wrapper ${classStyle ? classStyle : ''}`}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default PageLayout;