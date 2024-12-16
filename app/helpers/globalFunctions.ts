import { HourlyWeather, WeatherImage } from "../types";
import getWeatherImage, { WeatherCode } from "./getWeatherImage";

export interface WeatherInfo {
    hourly: {
        temperature_2m: number[];
        time: string[];
    };
}

interface DailyForecast {
    date: string;
    avgTemperature: number;
    weatherIcon: WeatherImage;
}

export const computeWeeklyForecast = (weatherInfo: WeatherInfo): DailyForecast[] => {
    const { hourly } = weatherInfo;
    const { temperature_2m, time } = hourly;

    const dailyData: Record<string, number[]> = {};

    time.forEach((timestamp, idx) => {
        const dateKey = timestamp.split('T')[0];
        if (!dailyData[dateKey]) {
            dailyData[dateKey] = [];
        }
        dailyData[dateKey].push(temperature_2m[idx]);
    });

    const forecastArray: DailyForecast[] = [];
    Object.entries(dailyData).forEach(([dateStr, temps]) => {
        const formattedDate = conciseDateFormat(dateStr);
        const avgTemp = computeAverageTemperature(temps);
        const weatherIcon = fetchCurrentWeather(hourly, reformatDate(dateStr));
        forecastArray.push({ date: formattedDate, avgTemperature: avgTemp, weatherIcon });
    });

    return forecastArray;
};

const computeAverageTemperature = (temps: number[]): number => {
    const total = temps.reduce((acc, temperature) => acc + temperature, 0);
    return Math.round(total / temps.length);
};

export const reformatDate = (inputDate?: string): string => {
    let dateObj;
    if (inputDate) {
        dateObj = new Date(inputDate);
        if (isNaN(dateObj.getTime())) {
            return 'Invalid Date';
        }
    } else {
        dateObj = new Date();
    }
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear().toString().slice(-2);

    return `${day}/${month}/${year}`;
};

export const fetchCurrentWeather = (hourlyData: HourlyWeather, dateStr: string): { image: string; description: string } => {
    const { time: hourlyTimes, weather_code: weatherCodes } = hourlyData;
    const [day, month, year] = dateStr.split('/').map(Number);
    const completeYear = 2000 + year;
    const parsedDate = new Date(completeYear, month - 1, day);

    const hourOfDay = parsedDate.getHours();
    const isoDateStr = parsedDate.toISOString();
    const currentHourISO = isoDateStr.substring(0, 13) + ':00';

    const isDay = hourOfDay >= 6 && hourOfDay < 18;

    const currentIndex = hourlyTimes.findIndex(timeEntry => timeEntry.startsWith(currentHourISO));

    if (currentIndex === -1) {
        return { image: 'https://openweathermap.org/img/wn/02d@2x.png', description: 'Partly Cloudy' };
    }

    const weatherCode = weatherCodes?.[currentIndex];

    return getWeatherImage(weatherCode as WeatherCode, isDay);
};


export const conciseDateFormat = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
};
