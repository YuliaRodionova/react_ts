import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import WeightIcon from "./weightIcon";

test('svg weight', () => {
    const { container } = render(<WeightIcon unit="г" />)

    const element = screen.getByTestId('svg');
    expect(element).toBeInTheDocument;
})