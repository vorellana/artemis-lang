import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loader from '../../../src/components/Loader';

describe('Loader component', () => {
  test('renders without crashing', () => {
    render(<Loader isOpen={true} />);
  });

  test('renders when isOpen is true', () => {
    render(<Loader isOpen={true} />);
    const loaderElement = screen.getByTestId('loader-container');
    expect(loaderElement).toBeInTheDocument();
  });

  test('does not render when isOpen is false', () => {
    render(<Loader isOpen={false} />);
    const loaderElement = screen.queryByTestId('loader-container');
    expect(loaderElement).not.toBeInTheDocument();
  });
});
