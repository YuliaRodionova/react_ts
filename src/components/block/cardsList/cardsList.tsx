import './cardsList.scss'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Card from '../card/card';
import { mockProducts } from '../../../mocks/productsMock';
import { IProduct } from '../../../interfaces/IProduct';
import Sidebar from '../sidebar/sidebar';
import { RootState } from '../../../lib/store/store';
import Button from '../../ui/button/button';


function CardsList(): JSX.Element {
    const productsListState = useSelector((store: RootState) => store.productsList);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [sortBy, setSort] = useState<string>('name_asc');

    useEffect(() => {
        const productsList: IProduct[] = productsListState.productsList.length > 0 ? productsListState.productsList : JSON.parse(mockProducts);

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
        setProducts(productsList);
    }, [sortBy]);

    const sortHandler = (event: any) => {
        setSort(event.target.value);
    }

    const cardsList = products ? products.map(product => {
        return <Card key={product.id} productItem={product} />
    }) : [];

    return (
        <>
            <select onChange={sortHandler} value={sortBy}>
                <option value="name_asc">По названию ASC</option>
                <option value="name_desc">По названию DESC</option>
                <option value="price_asc">По цене ASC</option>
                <option value="price_desc">По цене DESC</option>
            </select>
            {cardsList.length > 0 ? <div >
                <h2 className='section-title cards-page__title'>Косметика и гигиена</h2>
                <div className='cards-page__wrapper'>
                    <Button styleClass='button__bg-white button_square button_font-main' text='Уход за лицом' />
                    <Button styleClass='button__bg-white button_square button_font-main' text='Уход за телом' />
                    <Button styleClass='button__bg-white button_square button_font-main' text='Уход за руками' />
                    <Button styleClass='button__bg-white button_square button_font-main' text='Уход за ногами' />
                    <Button styleClass='button__bg-white button_square button_font-main' text='Уход за волосами' />
                    <Button styleClass='button__bg-white button_square button_font-main' text='Средства для загара' />
                    <Button styleClass='button__bg-white button_square button_font-main' text='Средства для бритья' />
                    <Button styleClass='button__bg-white button_square button_font-main' text='Подарочные наборы' />
                    <Button styleClass='button__bg-white button_square button_font-main' text='Гигиеническая продукция' />
                    <Button styleClass='button__bg-white button_square button_font-main' text='Гигиена полости рта' />
                    <Button styleClass='button__bg-white button_square button_font-main' text='Бумажная продукция' />
                </div>
                <div className='cards-page'>
                    <Sidebar />
                    <div className='cards-list'>{cardsList}</div>
                </div>
            </div> : <p>Товаров нет</p>}
        </>
    )
}

export default CardsList;