import CountCartChanger from "./countCartChanger";
import {render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as reactHooks from 'react-redux';
import configureStore from 'redux-mock-store';
jest.mock('react-redux');

test('CountCartChanger count product unit', ()=>{
    const initialState ={
        cartList: [],
        productList:{

        }
    }
    
    const mockStore = configureStore();
    let store = mockStore(initialState);

    const useDispatchMock = jest.spyOn(reactHooks, "useDispatch");
    
    const mockDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockDispatch);
    

    const {container} = render(<CountCartChanger leftValue={1} rightValue={1} count={1} productId={11}/>)
    const elemButtonUp = screen.getByTestId('button-up');
    const elemButtonDown = screen.getByTestId('button-down');
    userEvent.click(elemButtonUp)
    userEvent.click(elemButtonUp)
    const span = container.querySelector('span');
    expect(span!.textContent).toContain('3');
    userEvent.click(elemButtonDown);
    expect(span!.textContent).toContain('2');
    
})

