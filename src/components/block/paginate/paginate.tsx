import './paginate.scss';

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

    const currentPage = itemsPageOffset / itemsOnPage;

    function getArrayPages(n: number) {
        let arr = [];
        if (n) {
            for (let i = 1; i <= n;) {
                arr.push(i++);
            }
        }
        return arr;
    }

    const pageArray = getArrayPages(pageCount);

    const paginateList = pageArray ? pageArray.map(pageNumber => {
        return <li key={pageNumber}><button className={`${currentPage === pageNumber - 1 ? 'active' : ''} button`} onClick={() => clickHandler(pageNumber - 1)}>{pageNumber}</button></li>
    }) : [];

    return (
        <ul className="paginate">{paginateList}</ul>
    )

}

export default Paginate;