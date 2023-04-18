import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Product from "../../block/product/product";
import PageLayout from "../../layouts/pageLayout/pageLayout";
import { IProduct } from '../../../interfaces/IProduct';
import { mockProducts } from '../../../mocks/productsMock';
import { RootState } from '../../../lib/store/store';

const initialForm: IProduct = {
    id: 0,
    img: '/productImg.jpg',
    productName: '',
    unit: '',
    weight: 0,
    code: 0,
    producer: '',
    brand: 'Tide',
    description: '',
    price: 0,
    available: true,
    articleNumber: '',
    careType: []
}

function ProductPage(): JSX.Element {
    const { id } = useParams();
    const productsListState = useSelector((store: RootState) => store.productsList);
    const [product, setProduct] = useState<IProduct>(initialForm);

    const productsList: IProduct[] = productsListState.productsList.length > 0 ? productsListState.productsList : JSON.parse(mockProducts);

    useEffect(() => {
        const targetId = id ? +id : 0;
        const targetProduct = productsList.find(product => product.id == targetId);
        if (targetProduct) {
            setProduct(targetProduct);
        }

    }, [])

    return (
        <PageLayout>
            <Product {...product} />
        </PageLayout>

    );
}

export default ProductPage;