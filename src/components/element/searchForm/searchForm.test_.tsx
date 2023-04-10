import SearchForm from "./searchForm";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";


test('Element form', () => {
    const { container } = render(<SearchForm />)
    const elemInput = screen.getByRole('input');
    userEvent.type(elemInput, "Тест")



    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
})