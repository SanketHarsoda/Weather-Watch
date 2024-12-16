import 'react-native';
import React from 'react';

import {render, screen} from '@testing-library/react-native';
import App from '../app/App';

it('should render the App', () => {
  render(<App />);
  const homescreen = screen.getAllByTestId('home');
  expect(homescreen).toBeTruthy();
});
