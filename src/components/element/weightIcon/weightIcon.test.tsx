import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import WeightIcon from "./weightIcon";

test('Svg weight icon set in weight', () => {
    const { container } = render(<WeightIcon unit="г" />)

    const element = screen.getByTestId('svg');
    expect(element).toBeInTheDocument;
})