export interface HourlyWeather {
  time: string[];
  temperature_2m: number[];
  weather_code?: string[];
}

export interface CurrentWeather {
  time: string;
  interval: number;
  temperature_2m: number ;
}

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
  };
  current: CurrentWeather;
  hourly_units: {
    time: string;
    temperature_2m: string;
    weather_code: string;
  };
  hourly: HourlyWeather;
}

export interface LocationData {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
}

export interface LocationResponse {
  results: LocationData[];
  generationtime_ms: number;
}

export interface WeatherImage {
  description: string;
  image: string;
}

export interface WeeklyWeatherItem {
  avgTemperature: string,
  date: string;
  weatherIcon: WeatherImage

}