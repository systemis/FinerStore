import axios, { AxiosResponse } from 'axios';

export interface RequestPayload {
  method?: 'GET' | 'POST';
  body?: any;
  params?: any;
}

export const request = async <T>(
  url: string, query?: RequestPayload
): Promise<T | undefined> => {
  try {
    const data = await axios(`http://127.0.0.1:8000${url}`, {
      method: query?.method || 'GET',
      params: query?.params,
      data: query?.body
    })

    return (data.data as T);
  } catch {
    return undefined;
  }
}