import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Toast from '../../../src/components/Toast';

describe('Toast component', () => {
  const defaultProps = {
    message: 'Test message',
    duration: 2000,
    onToastHidden: jest.fn(),
  };

  test('renders without crashing', () => {
    render(<Toast {...defaultProps} />);
  });

  test('renders with message', () => {
    render(<Toast {...defaultProps} />);
    const messageElement = screen.getByText(defaultProps.message);
    expect(messageElement).toBeInTheDocument();
  });

  test('calls onToastHidden after the specified duration', () => {
    jest.useFakeTimers();
    render(<Toast {...defaultProps} />);
    expect(defaultProps.onToastHidden).not.toHaveBeenCalled();

    // jest.advanceTimersByTime(defaultProps.duration + 500);
    act(() => {
      jest.advanceTimersByTime(defaultProps.duration + 500);
    });

    expect(defaultProps.onToastHidden).toHaveBeenCalled();
    jest.useRealTimers();
  });
});
