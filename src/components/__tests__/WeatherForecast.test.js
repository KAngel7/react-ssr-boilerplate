import React from 'react';
import { render, act, waitForElement } from '@testing-library/react';

import WeatherForecast from '../WeatherForecast';

jest.mock('../../api/weatherApi');

describe('<WeatherForecast />', () => {
  it('renders WeatherForecast', async () => {
    await act(async () => {
      const { container, getByTestId } = render(
        <WeatherForecast cityId={1252431} />
      );
      expect(container.querySelector('section').textContent).toEqual(
        'Loading...'
      );

      const weatherList = await waitForElement(() =>
        getByTestId('weather-list')
      );

      expect(weatherList.querySelector('h2').textContent).toEqual(
        'Ho Chi Minh Test'
      );
    });
  });
});
