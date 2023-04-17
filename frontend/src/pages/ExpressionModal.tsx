import React, { useEffect, useState } from 'react';
import { expressionTypesValues, ExpressionType } from '../types/types';
import InputConst from '../components/InputConst';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExpressionChange: (data: any) => void;
}

const ExpressionModal: React.FC<ModalProps> = ({ isOpen, onClose, onExpressionChange }) => {
  const [expressionType, setExpressionType] = useState<ExpressionType>();
  const [inputValues, setInputValues] = useState({});
  useEffect(() => {
    if (isOpen) {
      setExpressionType('null');
      setInputValues({});
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleExpressionTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setExpressionType(event.target.value as ExpressionType);
    setInputValues(prevInputValues => {
      return {
        ...prevInputValues,
        type: event.target.value
      };
    });

    console.log('select -> ', event.target.value);
  };

  const handleAccept = () => {
    console.log('inputValues -> ',inputValues);
    onExpressionChange(inputValues);
    onClose();
  }

  const handleInputChange = (id:string, value: string) => {
    console.log('handleInputChange505 --> :', id,'/',value);
    setInputValues(prevInputValues => {
      return {
        ...prevInputValues,
        [id]: value
      };
    });
  };

  const renderExpressionTypeContent = () => {
    console.log('renderExpressionTypeContent 110');
    
    switch (expressionType) {
      case 'if':
        return (
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">Expresión a evaluar:</label>
            <InputConst id="ifInp1" onInputChange={handleInputChange}/>
            <label className="block text-white text-sm font-bold mb-2">Si es verdadero:</label>
            <InputConst id="ifInp2" onInputChange={handleInputChange}/>
            <label className="block text-white text-sm font-bold mb-2">Si es falso:</label>
            <InputConst id="ifInp3" onInputChange={handleInputChange}/>
          </div>
        )
      case 'and':
        return (
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">Constantes:</label>
            <InputConst id="andInp1" onInputChange={handleInputChange}/>
            <InputConst id="andInp2" onInputChange={handleInputChange}/>
          </div>
        )
      case 'or':
        return (
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">Constantes:</label>
            <InputConst id="orInp1" onInputChange={handleInputChange}/>
            <InputConst id="orInp2" onInputChange={handleInputChange}/>
          </div>
        )
      case 'not':
        return (
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">Constante:</label>
            <InputConst id="notInp1" onInputChange={handleInputChange}/>
          </div>
        )
      case 'const':
        return (
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">Constante:</label>
            <InputConst id="constInp1" onInputChange={handleInputChange}/>
          </div>
        )
      case 'eq':
        return (
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">Constantes:</label>
            <InputConst id="eqInp1" onInputChange={handleInputChange}/>
            <InputConst id="eqInp2" onInputChange={handleInputChange}/>
          </div>
        )        
      case 'tl':
        return (
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">Constante:</label>
            <InputConst id="tlInp1" onInputChange={handleInputChange}/>
          </div>
        )
      case 'tu':
        return (
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">Constante:</label>
            <InputConst id="tuInp1" onInputChange={handleInputChange}/>
          </div>
        )        
      default:
        return null;
    }
  };
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="inline-block align-middle bg-indigo-600 rounded-lg text-left overflow-hidden shadow-xl transform transition-all p-6 w-full max-w-md border border-white">
          <h1 className="text-2xl md:text-4xl font-bold mb-1 text-white text-center">Expresión</h1>
          <form className="flex flex-col">
            <div className="mb-6">
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Tipo:</label>
              <select
                id="expression-type"
                name="type"
                value={expressionType}
                onChange={handleExpressionTypeChange}
                data-testid="expression-type"
                className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" hidden>(SELECT)</option>
                {expressionTypesValues.map((expressionType, index) => (
                  <option key={index} value={expressionType.value}>
                    {expressionType.label}
                  </option>
                ))}
              </select>
            </div>
            {renderExpressionTypeContent()}
            <button className="bg-blue-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6 border border-white"
              onClick={handleAccept}
              type="button"
            >
              Aceptar
            </button>
            <button 
              onClick={onClose}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 border border-white" type="button"
            >
              Cerrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpressionModal;
