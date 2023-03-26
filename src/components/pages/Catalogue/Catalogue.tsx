import { useState, useEffect } from 'react';
import Card from "../../block/card/card";
import { mockProducts } from '../../../mocks/productsMock';
import { IProduct } from '../../../interfaces/IProduct';


function Catalogue(): JSX.Element {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [sortBy, setSort] = useState<string>('name_asc');

    useEffect(() => {
        const productsList: IProduct[] = JSON.parse(mockProducts);
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
            {cardsList.length > 0 ? cardsList : <p>Товаров нет</p>}
        </>
    )
}

export default Catalogue;