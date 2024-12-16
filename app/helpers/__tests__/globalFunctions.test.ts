import { computeWeeklyForecast, conciseDateFormat, fetchCurrentWeather, reformatDate, WeatherInfo } from "../globalFunctions";

jest.mock('../globalFunctions.ts', () => ({
    ...jest.requireActual('../globalFunctions.ts'),
    conciseDateFormat: jest.fn(),
    reformatDate: jest.fn(),
    fetchCurrentWeather: jest.fn(),
}));

describe('computeWeeklyForecast', () => {
    const mockWeatherInfo: WeatherInfo = {
        hourly: {
            temperature_2m: [15, 20, 25, 30, 22, 18, 26, 21],
            time: [
                '2024-09-10T00:00:00Z',
                '2024-09-10T06:00:00Z',
                '2024-09-10T12:00:00Z',
                '2024-09-10T18:00:00Z',
                '2024-09-11T00:00:00Z',
                '2024-09-11T06:00:00Z',
                '2024-09-11T12:00:00Z',
                '2024-09-11T18:00:00Z',
            ],
        },
    };

    const mockConciseDateFormat = '11 Sept';
    const mockReformatDate = '11/09/24';
    const mockWeatherIcon = {
        image: 'https://openweathermap.org/img/wn/02d@2x.png',
        description: 'Partly Cloudy',
    };

    beforeEach(() => {
        (conciseDateFormat as jest.Mock).mockImplementation((dateStr: string) => mockConciseDateFormat);
        (reformatDate as jest.Mock).mockImplementation((dateStr: string) => mockReformatDate);
        (fetchCurrentWeather as jest.Mock).mockImplementation(() => mockWeatherIcon);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return the correct forecast array length', () => {
        const forecast = computeWeeklyForecast(mockWeatherInfo);
        expect(forecast.length).toBe(2);
    });

    it('should compute the correct average temperature for each date', () => {
        const forecast = computeWeeklyForecast(mockWeatherInfo);
        const firstDayForecast = forecast[0];
        const secondDayForecast = forecast[1];

        expect(firstDayForecast.avgTemperature).toBe(23);
        expect(secondDayForecast.avgTemperature).toBe(22);
    });

    it('should fetch the correct weather icon and description for each forecast', () => {
        const forecast = computeWeeklyForecast(mockWeatherInfo);
        forecast.forEach((dayForecast) => {
            expect(dayForecast.weatherIcon).toEqual(mockWeatherIcon);
        });
    });

    it('should handle empty hourly data gracefully', () => {
        const emptyWeatherInfo: WeatherInfo = {
            hourly: {
                temperature_2m: [],
                time: [],
            },
        };
        const forecast = computeWeeklyForecast(emptyWeatherInfo);
        expect(forecast).toEqual([]);
    });
});