import { expect, jest, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import Card from './card';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../lib/store/store';
import * as reduxHooks from 'react-redux';
import { fireEvent } from '@testing-library/react';

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

jest.mock('react-redux');
const jestSpyDispatch = jest.spyOn(reduxHooks, 'useDispatch');
test('', () => {
    const dispatch = jest.fn();
    jestSpyDispatch.mockReturnValue(dispatch);
    const { container } = render(
        <BrowserRouter>
            <Provider store={store}>
                <Card productItem={mockProduct} />
            </Provider>
        </BrowserRouter>

    )

    fireEvent.click(screen.getByLabelText(/корзину/i));

    expect(dispatch).toHaveBeenCalledTimes(1);
})

