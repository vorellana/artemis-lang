import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpressionModal from '../../../src/pages/ExpressionModal';

describe('ExpressionModal component', () => {
  const onCloseMock = jest.fn();
  const onExpressionChangeMock = jest.fn();

  test('renders without crashing when open', () => {
    render(<ExpressionModal isOpen={true} onClose={onCloseMock} onExpressionChange={onExpressionChangeMock} />);
    expect(screen.getByText('Expresión')).toBeInTheDocument();
  });

  test('does not render when closed', () => {
    const { container } = render(<ExpressionModal isOpen={false} onClose={onCloseMock} onExpressionChange={onExpressionChangeMock} />);
    expect(container.firstChild).toBeNull();
  });

  test('calls onExpressionChange with correct input values when Accept button is clicked', () => {
    render(<ExpressionModal isOpen={true} onClose={onCloseMock} onExpressionChange={onExpressionChangeMock} />);

    fireEvent.change(screen.getByTestId('expression-type'), {
      target: { value: 'const' },
    });

    fireEvent.change(screen.getByTestId('constInp1'), {
      target: { value: 'test_value' },
    });

    fireEvent.click(screen.getByText('Aceptar'));

    expect(onExpressionChangeMock).toHaveBeenCalledWith({ type: 'const', constInp1: 'test_value' });
  });
});
