
import React, { useState, useRef } from 'react';
import ExpressionModal from './ExpressionModal';
import Toast from '../components/Toast';
import Loader from '../components/Loader';
import shipEvaluateApi from '../services/shipEvaluateApi.services'
import structureJson from '../utils/structureJson'

function Commands() {
  
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [expressiondata, setExpressionData] = useState('');
	const [resultText, setResultText] = useState('');
	const [copyMessage, setCopyMessage] = useState('');
	const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [toastMessage, setToastMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const copyToClipboard = async () => {
    if (textareaRef.current) {
      try {
        await navigator.clipboard.writeText(textareaRef.current.value);
        setToastMessage('Texto copiado!');
      } catch (err) {
        console.error('Error al copiar el texto: ', err);
      }
    }
  };

  const handleToastHidden = () => {
    setToastMessage('');
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleExpressionChange = (data: any) => {
    console.log('handleExpressionChange 538 -> ', data);
    setResultText('');
    setExpressionData(structureJson(data));
  };

  const sendData = async () => {

    console.log('variables 930');
    console.log('NEXT_PUBLIC_API_URL -> ', process.env.NEXT_PUBLIC_API_URL);
    console.log('NEXT_PUBLIC_HOSTNAME -> ', process.env.NEXT_PUBLIC_HOSTNAME);
    console.log('NEXT_PUBLIC_API_KEY -> ', process.env.NEXT_PUBLIC_API_KEY);

    if (expressiondata === '') {
      setToastMessage('Expresión vacía!');    
      return;
    }
    setIsLoading(true);
    console.log('sendData 538 -> ', expressiondata);
    const res = await shipEvaluateApi(expressiondata);
    console.log('sendData 852 -> ', res);
    setResultText(JSON.stringify(res));
    setTimeout(() => {
      setIsLoading(false);  
    }, 2000);
  };

  return (
    <>
      <Loader isOpen={isLoading} />
      <div className="flex justify-center items-center h-screen bg-red-100">
        {toastMessage && (
          <Toast
            message={toastMessage}
            duration={1500}
            onToastHidden={handleToastHidden} // Asegúrate de incluir esta línea
          />
        )}

        <div className="w-full max-w-md bg-indigo-600 rounded-lg p-6">
          {/* <h1 className="text-2xl md:text-4xl font-bold mb-8 text-white text-center">Comandos</h1> */}
          <h1 className="text-2xl md:text-4xl font-bold mb-1 text-white text-center">Comandos</h1>
          <p className="text-xs text-white text-center mb-8">©Artemisa</p>
          <form className="flex flex-col">

            <div className="mb-2">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline w-full" 
                type="button"
                onClick={handleOpenModal}
              >
                Generar
              </button>
            </div>

            <div className="mb-2">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="expression-output" className="text-white text-sm font-bold">Expresión:</label>
                <button
                  className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-0.5 px-1.5 text-sm rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={copyToClipboard}
                >
                  Copiar
                </button>
              </div>

              {copyMessage && <div className="text-white text-sm mb-2">{copyMessage}</div>}

              <textarea
                ref={textareaRef}
                id="expression-output"
                name="expression-output"
                rows={20}
                readOnly
                value={expressiondata}
                className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                style={{ fontFamily: "monospace", fontWeight: 'bold' }}
              ></textarea>
            </div>

            <div className="mb-6">
              <button 
                type="button"
                onClick={sendData}
                className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                Enviar
              </button>
            </div>

            <div className="mb-6">
              <label htmlFor="first-name" className="block text-white text-sm font-bold mb-2">Resultado:</label>
              <input type="text" 
                id="first-name" 
                value={resultText}
                readOnly
                className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                style={{ fontFamily: "monospace", fontWeight: 'bold', fontSize: '1.0rem', backgroundColor: "lightgray" }}
                />
            </div>

          </form>
        </div>

        <ExpressionModal isOpen={isModalOpen} onClose={handleCloseModal} onExpressionChange={handleExpressionChange}/>
      </div>
    </>
  );
}

export default Commands