import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    key: import.meta.env.VITE_API_KEY,
  },
});

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance
      .post<FetchResponse<T>>(this.endpoint, data)
      .then((res) => res.data);
  };
}

export default APIClient;
