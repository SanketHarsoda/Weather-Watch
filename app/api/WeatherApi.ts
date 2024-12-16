import axios, { AxiosInstance } from 'axios';
import { LocationResponse, WeatherResponse } from '../types';
import { EndPoint } from '../constants';

const weatherInstance: AxiosInstance = axios.create({
  baseURL: EndPoint.baseUrl,
});

const getWeatherForecast = async (latitude: number, longitude: number): Promise<WeatherResponse> => {
  try {
    const response = await weatherInstance.get<WeatherResponse>('forecast', {
      params: {
        latitude,
        longitude,
        current: 'temperature_2m',
        hourly: 'temperature_2m,weather_code',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    throw error;
  }
};

const getLocationData = async (name: string): Promise<LocationResponse | null> => {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${name}`;
  try {
    const response = await axios.get<LocationResponse>(url);
    return response.data;
  } catch (error) {
    return null
  }
};

export { getWeatherForecast, getLocationData };
