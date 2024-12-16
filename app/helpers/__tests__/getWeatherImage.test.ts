import getWeatherImage, { WeatherCode } from '../getWeatherImage';

test.each([
  { weatherCode: '0', dayImage: 'https://openweathermap.org/img/wn/01d@2x.png', nightImage: 'https://openweathermap.org/img/wn/01n@2x.png' },
  { weatherCode: '1', dayImage: 'https://openweathermap.org/img/wn/01d@2x.png', nightImage: 'https://openweathermap.org/img/wn/01n@2x.png' },
  { weatherCode: '2', dayImage: 'https://openweathermap.org/img/wn/02d@2x.png', nightImage: 'https://openweathermap.org/img/wn/02n@2x.png' },
  { weatherCode: '3', dayImage: 'https://openweathermap.org/img/wn/03d@2x.png', nightImage: 'https://openweathermap.org/img/wn/03n@2x.png' },
  { weatherCode: '45', dayImage: 'https://openweathermap.org/img/wn/50d@2x.png', nightImage: 'https://openweathermap.org/img/wn/50n@2x.png' },
  { weatherCode: '48', dayImage: 'https://openweathermap.org/img/wn/50d@2x.png', nightImage: 'https://openweathermap.org/img/wn/50n@2x.png' },
  { weatherCode: '51', dayImage: 'https://openweathermap.org/img/wn/09d@2x.png', nightImage: 'https://openweathermap.org/img/wn/09n@2x.png' },
  { weatherCode: '53', dayImage: 'https://openweathermap.org/img/wn/09d@2x.png', nightImage: 'https://openweathermap.org/img/wn/09n@2x.png' },
  { weatherCode: '55', dayImage: 'https://openweathermap.org/img/wn/09d@2x.png', nightImage: 'https://openweathermap.org/img/wn/09n@2x.png' },
  { weatherCode: '56', dayImage: 'https://openweathermap.org/img/wn/09d@2x.png', nightImage: 'https://openweathermap.org/img/wn/09n@2x.png' },
  { weatherCode: '57', dayImage: 'https://openweathermap.org/img/wn/09d@2x.png', nightImage: 'https://openweathermap.org/img/wn/09n@2x.png' },
  { weatherCode: '61', dayImage: 'https://openweathermap.org/img/wn/10d@2x.png', nightImage: 'https://openweathermap.org/img/wn/10n@2x.png' },
  { weatherCode: '63', dayImage: 'https://openweathermap.org/img/wn/10d@2x.png', nightImage: 'https://openweathermap.org/img/wn/10n@2x.png' },
  { weatherCode: '65', dayImage: 'https://openweathermap.org/img/wn/10d@2x.png', nightImage: 'https://openweathermap.org/img/wn/10n@2x.png' },
  { weatherCode: '66', dayImage: 'https://openweathermap.org/img/wn/10d@2x.png', nightImage: 'https://openweathermap.org/img/wn/10n@2x.png' },
  { weatherCode: '67', dayImage: 'https://openweathermap.org/img/wn/10d@2x.png', nightImage: 'https://openweathermap.org/img/wn/10n@2x.png' },
  { weatherCode: '71', dayImage: 'https://openweathermap.org/img/wn/13d@2x.png', nightImage: 'https://openweathermap.org/img/wn/13n@2x.png' },
  { weatherCode: '73', dayImage: 'https://openweathermap.org/img/wn/13d@2x.png', nightImage: 'https://openweathermap.org/img/wn/13n@2x.png' },
  { weatherCode: '75', dayImage: 'https://openweathermap.org/img/wn/13d@2x.png', nightImage: 'https://openweathermap.org/img/wn/13n@2x.png' },
  { weatherCode: '77', dayImage: 'https://openweathermap.org/img/wn/13d@2x.png', nightImage: 'https://openweathermap.org/img/wn/13n@2x.png' },
  { weatherCode: '80', dayImage: 'https://openweathermap.org/img/wn/09d@2x.png', nightImage: 'https://openweathermap.org/img/wn/09n@2x.png' },
  { weatherCode: '81', dayImage: 'https://openweathermap.org/img/wn/09d@2x.png', nightImage: 'https://openweathermap.org/img/wn/09n@2x.png' },
  { weatherCode: '82', dayImage: 'https://openweathermap.org/img/wn/09d@2x.png', nightImage: 'https://openweathermap.org/img/wn/09n@2x.png' },
  { weatherCode: '85', dayImage: 'https://openweathermap.org/img/wn/13d@2x.png', nightImage: 'https://openweathermap.org/img/wn/13n@2x.png' },
  { weatherCode: '86', dayImage: 'https://openweathermap.org/img/wn/13d@2x.png', nightImage: 'https://openweathermap.org/img/wn/13n@2x.png' },
  { weatherCode: '95', dayImage: 'https://openweathermap.org/img/wn/11d@2x.png', nightImage: 'https://openweathermap.org/img/wn/11n@2x.png' },
  { weatherCode: '96', dayImage: 'https://openweathermap.org/img/wn/11d@2x.png', nightImage: 'https://openweathermap.org/img/wn/11n@2x.png' },
  { weatherCode: '99', dayImage: 'https://openweathermap.org/img/wn/11d@2x.png', nightImage: 'https://openweathermap.org/img/wn/11n@2x.png' },
])(
  'should render the correct image for weather code',
  ({ weatherCode, dayImage, nightImage }) => {
    expect(getWeatherImage(weatherCode as WeatherCode, true)).toEqual({ image: dayImage, description: expect.any(String) });
    expect(getWeatherImage(weatherCode as WeatherCode, false)).toEqual({ image: nightImage, description: expect.any(String) });
  },
);