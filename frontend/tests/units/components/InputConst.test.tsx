import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputConst from '../../../src/components/InputConst';

describe('InputConst component', () => {
  const defaultProps = {
    id: 'test-input',
    onInputChange: jest.fn(),
  };

  test('renders without crashing', () => {
    render(<InputConst {...defaultProps} />);
  });

  test('handles input change', () => {
    render(<InputConst {...defaultProps} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Hello' } });
    expect(defaultProps.onInputChange).toHaveBeenCalledWith(defaultProps.id, 'Hello');
  });

  test('handles true button click', () => {
    render(<InputConst {...defaultProps} />);
    const trueButton = screen.getByText('True');
    fireEvent.click(trueButton);
    expect(defaultProps.onInputChange).toHaveBeenCalledWith(defaultProps.id, 'true');
  });

  test('handles false button click', () => {
    render(<InputConst {...defaultProps} />);
    const falseButton = screen.getByText('False');
    fireEvent.click(falseButton);
    expect(defaultProps.onInputChange).toHaveBeenCalledWith(defaultProps.id, 'false');
  });
});
