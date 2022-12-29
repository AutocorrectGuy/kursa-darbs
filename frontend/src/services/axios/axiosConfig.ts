import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'


const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
})

axiosClient.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  
  if (!token)
    return config


  if (!config.headers)
    config.headers = {};

  config.headers["Authorization"] = `Bearer ${token}`;

  return config;
})

axiosClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error) => {
    if (error.response.status === 401)
      localStorage.removeItem('ACCESS_TOKEN')
    throw error
  }
)

export default axiosClient