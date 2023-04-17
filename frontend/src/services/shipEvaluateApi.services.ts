import axios from 'axios';

interface ShipEvaluateResponse {
  data: any; 
}

const shipEvaluateApi = async (data: any): Promise<ShipEvaluateResponse> => {
  try {
    const res = await axios.post<ShipEvaluateResponse>(`${process.env.NEXT_PUBLIC_API_URL}/ship/evaluate`, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return res.data;
  } catch (error) {
    console.error('Error posting players:', error);
    throw error;
  }
}
  
export default shipEvaluateApi;