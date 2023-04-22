import axios from 'axios';
import { apiUrl, apiKey } from '../utils/environmentVariables';

interface ShipEvaluateResponse {
  data: any; 
}

const shipEvaluateApi = async (data: any): Promise<ShipEvaluateResponse> => {
  try {
    const res = await axios.post<ShipEvaluateResponse>(`${apiUrl()}/ship/evaluate`, data, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey(),
      }
    });
    return res.data;
  } catch (error) {
    console.error('Error posting players:', error);
    throw error;
  }
}
  
export default shipEvaluateApi;