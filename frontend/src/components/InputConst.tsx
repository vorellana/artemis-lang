import React, { useState } from 'react';

interface InputConstProps {
  onInputChange: (id: string, value: string) => void;
  id: string;
}

const InputConst: React.FC<InputConstProps> = ({id, onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (id: string, value: string) => {
    setInputValue(value);
    onInputChange(id, value);
  };

  return (
    <div className="flex items-center mb-2">
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={inputValue}
        data-testid={id}
        onChange={(e) => handleChange(id, e.target.value)}
        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        type="button"
        className="bg-blue-500 text-white py-1 px-3 rounded ml-2 border border-white"
        onClick={() => handleChange(id, 'true')}
      >
        True
      </button>
      <button
        type="button"
        className="bg-red-500 text-white py-1 px-3 rounded ml-2 border border-white"
        onClick={() => handleChange(id, 'false')}
      >
        False
      </button>
    </div>
  );
}

export default InputConst;
