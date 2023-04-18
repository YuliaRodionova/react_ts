import SearchForm from "./searchForm";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";


test('Form button handler have been called', () => {
    const onChange  = jest.fn().mockImplementation((e) => e.preventDefault());

    const { container } = render(<SearchForm handler={onChange}/>)

    const elemButton = screen.getByRole('button');
    userEvent.click(elemButton)
    
    expect(onChange).toHaveBeenCalledTimes(1)
})