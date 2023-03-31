import './sort.scss';

interface ISort {
    sortBy: string,
    sortHandler: any
}

function Sort({ sortBy, sortHandler }: ISort): JSX.Element {
    return (
        <>
            <select className='cards-list__sort cards-list__sort_gray cards-list__select' onChange={sortHandler} value={sortBy}>
                <option value="name_asc">По названию  ▴</option>
                <option value="name_desc">По названию ▾</option>
                <option value="price_asc">По цене  ▴</option>
                <option value="price_desc">По цене ▾</option>
            </select>
        </>)
}

export default Sort;