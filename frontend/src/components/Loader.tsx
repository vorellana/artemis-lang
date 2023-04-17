import React from 'react';

interface LoaderProps {
  isOpen: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div data-testid="loader-container" className="fixed inset-0  flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white w-40 h-40 rounded-lg p-4 flex flex-col items-center justify-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-16 w-16 mb-4"></div>
        {/* <h2 className="text-center text-gray-500">Procesando...</h2> */}
      </div>
    </div>
  );
};

export default Loader;