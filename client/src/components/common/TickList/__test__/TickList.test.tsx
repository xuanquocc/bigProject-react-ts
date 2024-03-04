import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tick from '../index.tsx';

test('render Tick component with text and icon', () => {
  const { getByText, getByAltText } = render(<Tick icon="tick" text="Example" />);
  expect(getByText('Example')).toBeInTheDocument();
  expect(getByAltText('icon')).toBeInTheDocument();
});

test('render Tick component without icon', () => {
  const { getByText, queryByAltText } = render(<Tick text="Example" />);
  expect(getByText('Example')).toBeInTheDocument();
  expect(queryByAltText('icon')).toBeNull();
});
