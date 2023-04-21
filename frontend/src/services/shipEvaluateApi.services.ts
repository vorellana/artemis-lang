import axios from 'axios';

interface ShipEvaluateResponse {
  data: any; 
}

//TODO: crear un metodo para obtener todas las variables de entorno
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:81';

const shipEvaluateApi = async (data: any): Promise<ShipEvaluateResponse> => {
  try {
    const res = await axios.post<ShipEvaluateResponse>(`${apiUrl}/ship/evaluate`, data, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
      }
    });
    return res.data;
  } catch (error) {
    console.error('Error posting players:', error);
    throw error;
  }
}
  
export default shipEvaluateApi;