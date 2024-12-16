import axios from 'axios';
import { getLocationData } from '../WeatherApi';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getLocationData', () => {
    it('should return location data when API call is successful', async () => {
        const mockResponse = {
            results: [
                {
                    admin1: 'Gujarat',
                    admin1_id: 1270770,
                    country: 'India',
                    country_code: 'IN',
                    country_id: 1269750,
                    elevation: 20,
                    feature_code: 'PPL',
                    id: 1255364,
                    latitude: 21.19594,
                    longitude: 72.83023,
                    name: 'Surat',
                    population: 2894504,
                    timezone: 'Asia/Kolkata',
                },
            ],
        };

        mockedAxios.get.mockResolvedValue({ data: mockResponse });

        const result = await getLocationData('Surat');
        expect(result).toEqual(mockResponse);
        expect(mockedAxios.get).toHaveBeenCalledWith(
            'https://geocoding-api.open-meteo.com/v1/search?name=Surat'
        );
    });

    it('should return null when API call fails', async () => {
        mockedAxios.get.mockRejectedValue(new Error('Network Error'));

        const result = await getLocationData('Surat');
        expect(result).toBeNull();
        expect(mockedAxios.get).toHaveBeenCalledWith(
            'https://geocoding-api.open-meteo.com/v1/search?name=Surat'
        );
    });

    it('should handle empty location name gracefully', async () => {
        mockedAxios.get.mockRejectedValue(new Error('Invalid name'));

        const result = await getLocationData('');
        expect(result).toBeNull();
        expect(mockedAxios.get).toHaveBeenCalledWith(
            'https://geocoding-api.open-meteo.com/v1/search?name='
        );
    });
});
