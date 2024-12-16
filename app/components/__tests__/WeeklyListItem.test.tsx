import React from 'react';
import {render} from '@testing-library/react-native';
import {WeeklyListItem} from '../weekly-list-item';

describe('WeeklyListItem', () => {
  const mockItem = {
    date: '16 Sept',
    weatherIcon: {
      description: 'Mainly Clear',
      image: 'https://openweathermap.org/img/wn/01d@2x.png',
    },
    avgTemperature: 25,
  };

  it('renders the date correctly', () => {
    const {getByText} = render(<WeeklyListItem item={mockItem} />);
    expect(getByText('16 Sept')).toBeTruthy();
  });

  it('renders the weather image correctly', () => {
    const {getByTestId} = render(<WeeklyListItem item={mockItem} />);
    const image = getByTestId('cloud-image');
    expect(image.props.source.uri).toBe(
      'https://openweathermap.org/img/wn/01d@2x.png',
    );
  });

  it('renders the average temperature correctly', () => {
    const {getByText} = render(<WeeklyListItem item={mockItem} />);
    expect(getByText('25')).toBeTruthy();
  });
});
