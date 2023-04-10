import { render, screen } from '@testing-library/react';
import Card from './card';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../lib/store/store';


const mockProduct = {
    id: 7,
    img: "/productImg8.jpg",
    productName: "Жидкое мыло",
    unit: "мл",
    weight: 300,
    code: 4604049097552,
    producer: "UNILEVER",
    brand: "Dove",
    price: 99,
}
describe('Component: Card', () => {
    it('Exist in the DOM', () => {
        const { container } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Card productItem={mockProduct} />
                </Provider>
            </BrowserRouter>

        );


        expect(container.querySelector('.card__img')).toBeInTheDocument();

        expect(
            container.querySelector('.card__img').getAttribute("src")
        ).toEqual(mockProduct.img);

        expect(container.querySelector('.card__price').textContent).toBe(`${mockProduct.price} ₸`);


    });
})


