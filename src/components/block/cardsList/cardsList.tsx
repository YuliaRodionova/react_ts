import './cardsList.scss'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Card from '../card/card';
import { mockProducts } from '../../../mocks/productsMock';
import { mockCategories } from '../../../mocks/categoriesMock';
import { IProduct } from '../../../interfaces/IProduct';
import { ICategory } from '../../../interfaces/ICategory';
import Sidebar from '../sidebar/sidebar';
import { RootState } from '../../../lib/store/store';
import Button from '../../ui/button/button';
import Paginate from '../paginate/paginate';


function CardsList(): JSX.Element {
    const productsListState = useSelector((store: RootState) => store.productsList);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [sortBy, setSort] = useState<string>('name_asc');
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
    const [cardsOnPage, setCardsOnPage] = useState<number>(6);
    const [cardsOffset, setCardsOffset] = useState<number>(0);
    const [countPages, setCountPages] = useState<number>(1);

    const categories: ICategory[] = JSON.parse(mockCategories);

    useEffect(() => {
        const initialProductsList: IProduct[] = productsListState.productsList.length > 0 ? productsListState.productsList : JSON.parse(mockProducts);

        const productsList = selectedCategoryId ? initialProductsList.filter(product => {
            return product.careType.includes(selectedCategoryId);
        }) : initialProductsList;

        const needCountPages: number = Math.ceil(productsList.length / cardsOnPage);

        setCountPages(needCountPages);

        switch (sortBy) {
            case 'name_asc':
                productsList.sort((a, b) => a.brand > b.brand ? 1 : -1);
                break;
            case 'name_desc':
                productsList.sort((a, b) => b.brand > a.brand ? 1 : -1);
                break;
            case 'price_asc':
                productsList.sort((a, b) => a.price - b.price);
                break;
            case 'price_desc':
                productsList.sort((a, b) => b.price - a.price);
                break;
            default:
                productsList.sort((a, b) => a.brand > b.brand ? 1 : -1);
        }

        const currentProductsList = productsList.slice(cardsOffset, cardsOnPage + cardsOffset);

        setProducts(currentProductsList);
    }, [sortBy, cardsOffset, selectedCategoryId]);

    const sortHandler = (event: any) => {
        setSort(event.target.value);
    }

    const filterByCategoryHandler = (categoryId: number) => {
        categoryId == selectedCategoryId ? setSelectedCategoryId(null) : setSelectedCategoryId(categoryId);
        setCardsOffset(0);
    }

    const categoriesList = categories ? categories.map(category => {
        return <Button key={category.categoryId} handlerClick={() => filterByCategoryHandler(category.categoryId)} styleClass={` button_square button_font-main ${selectedCategoryId != category.categoryId ? 'button__bg-white' : ''}`} text={category.categoryTitle} />
    }) : [];

    const cardsList = products ? products.map(product => {
        return <Card key={product.id} productItem={product} />
    }) : [];

    return (
        <>
            <div className='cards-list'>
                <div className='cards-list__header'>
                    <h2 className='section-title cards-list__title'>Косметика и гигиена</h2>
                    <span className='cards-list__sort'>Сортировка:</span>
                    <select className='cards-list__sort cards-list__sort_gray cards-list__select' onChange={sortHandler} value={sortBy}>
                        <option value="name_asc">По названию  ▴</option>
                        <option value="name_desc">По названию ▾</option>
                        <option value="price_asc">По цене  ▴</option>
                        <option value="price_desc">По цене ▾</option>
                    </select>
                </div>
                <div className='cards-list__filters'>
                    {categoriesList}
                </div>
                <div className='cards-list__wrapper'>
                    <Sidebar categories={categories} selectedCategoryId={selectedCategoryId} selectCategoryHandler={filterByCategoryHandler} />
                    <div className='cards-list__container'>
                        {cardsList.length > 0 ? <div className='cards-list__list'>{cardsList}</div> : <p>Товаров нет</p>}
                        {countPages > 1 && <Paginate pageCount={countPages} itemsOnPage={cardsOnPage} itemsPageOffset={cardsOffset} setItemsPageOffset={setCardsOffset} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardsList;