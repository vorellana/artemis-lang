import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  duration: number;
  onToastHidden: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, duration, onToastHidden }) => {
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  const fadeOut = () => {
    setOpacity(0);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fadeOut();
    }, duration);

    const hideTimer = setTimeout(() => {
      setVisible(false);
      onToastHidden();
    }, duration + 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [duration, onToastHidden]);

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
        backgroundColor: "rgba(0,0,0,0.8)",
        color: "white",
        padding: "16px",
        borderRadius: "5px",
        textAlign: "center",
        opacity: opacity,
        transition: "opacity 0.5s",
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
