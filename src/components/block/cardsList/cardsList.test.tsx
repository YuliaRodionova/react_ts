
import { render, screen } from '@testing-library/react';
import CardsList from './cardsList';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../lib/store/store';
import * as reduxHooks from 'react-redux';
import { fireEvent } from '@testing-library/react';
import { describe } from 'node:test';


jest.mock('react-redux')

test('Card-list element: should create list with items', () => {


    const { container } = render(
        <BrowserRouter>
            <Provider store={store}>
                <CardsList />
            </Provider>
        </BrowserRouter>

    )

    expect(container).toMatchSnapshot();

});

/*test('Card-list element: should add button', () => {

    const dispatch = jest.fn();
    jest.spyOn(reduxHooks, 'useDispatch').mockReturnValue(dispatch);

    const { container } = render(
        <BrowserRouter>
            <Provider store={store}>
                <CardsList />
            </Provider>
        </BrowserRouter>

    )

    fireEvent.click(screen.getByRole('button'));

    expect(dispatch).toHaveBeenCalledTimes(1);
});
*/
