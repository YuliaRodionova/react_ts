interface IPaginate {
    pageCount: number;
    itemsOnPage: number;
    itemsPageOffset: number;
    setItemsPageOffset: any;
}

function Paginate({ pageCount, itemsOnPage, itemsPageOffset, setItemsPageOffset }: IPaginate): JSX.Element {

    const clickHandler = (pageNumber: number) => {
        setItemsPageOffset(pageNumber * itemsOnPage);
    }

    return (
        <>
            <ul>
                <li><button className="button" onClick={() => clickHandler(0)}>1</button></li>
                <li><button className="button" onClick={() => clickHandler(1)}>2</button></li>
                <li><button className="button" onClick={() => clickHandler(2)}>3</button></li>
            </ul>
        </>
    )
}

export default Paginate;