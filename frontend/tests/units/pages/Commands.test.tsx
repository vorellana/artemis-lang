import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Commands from '../../../src/pages/Commands';

describe('Commands component', () => {
  test('renders without crashing', () => {
    render(<Commands />);
  });

  test('opens and closes ExpressionModal', () => {
    render(<Commands />);
    const generateButton = screen.getByText('Generar');
    fireEvent.click(generateButton);
    const closeModalButton = screen.getByText('Cerrar');
    expect(closeModalButton).toBeInTheDocument();
    fireEvent.click(closeModalButton);
    expect(closeModalButton).not.toBeInTheDocument();
  });

  test('copies expression to clipboard', async () => {
    const mockClipboard = {
      writeText: jest.fn(),
    };
    Object.defineProperty(navigator, 'clipboard', {
      value: mockClipboard,
      configurable: true,
    });

    render(<Commands />);
    const copyButton = screen.getByText('Copiar');
    await act(async () => {
      fireEvent.click(copyButton);
    });
    expect(mockClipboard.writeText).toHaveBeenCalled();
  });
});
