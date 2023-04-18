
import { render, screen } from '@testing-library/react';
import CardsList from './cardsList';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../lib/store/store';


test('Card-list element: snapshot', () => {


    const { container } = render(
        <BrowserRouter>
            <Provider store={store}>
                <CardsList />
            </Provider>
        </BrowserRouter>

    )

    expect(container).toMatchSnapshot();

});


