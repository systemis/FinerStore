import axios from 'axios';
export interface RequestPayload {
  method?: 'GET' | 'POST';
  body?: any;
  params?: any;
}
export class NetworkProvider {
  async request<T>(
    url: string, 
    query?: RequestPayload, 
  ): Promise<T | undefined> {
    try {
      const data = await axios(`https://finner-api.herokuapp.com${url}`, {
        method: query?.method || 'GET',
        params: query?.params,
        data: query?.body
      })
  
      return (data.data as T);
    } catch {
      return undefined;
    }
  }
}