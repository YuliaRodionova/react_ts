import { render, screen } from '@testing-library/react';
import Button from './button';

test('Button element: exist in the DOM', () => {
    const mock = 'button';
    const { container } = render(<Button styleClass={mock} />)
    expect(container.querySelector('button')).toBeInTheDocument();
});