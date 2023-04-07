import { render, screen } from '@testing-library/react';
import CardsList from './cardsList';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../lib/store/store';
import * as reduxHooks from 'react-redux';

jest.mock('react-redux')

test('Card-list element: should create list with items', () => {
    const mockTestProducts = [{
        id: 7,
        img: "/productImg8.jpg",
        productName: "Мыло",
        unit: "мл",
        weight: 300,
        code: 4604049097552,
        producer: "A",
        brand: "D",
        price: 40,
    },
    {
        id: 8,
        img: "/productImg9.jpg",
        productName: "Крем",
        unit: "мл",
        weight: 45,
        code: 46040490975555,
        producer: "B",
        brand: "J",
        price: 50,
    },
    {
        id: 9,
        img: "/productImg7.jpg",
        productName: "Мочалка",
        unit: "г",
        weight: 30,
        code: 4604049097554534,
        producer: "C",
        brand: "E",
        price: 60,
    }]
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(mockTestProducts);

    const { container } = render(
        <BrowserRouter>
            <Provider store={store}>
                <CardsList />
            </Provider>
        </BrowserRouter>

    )

    expect(container).toMatchSnapshot();
});