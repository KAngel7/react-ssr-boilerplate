import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

import { api } from '../api';
import WeatherForecast from './WeatherForecast';

const DEFAULT_CITY_ID = 1252431; // Ho Chi Minh

const Home = () => {
  const [selectedCity, setSelectedCity] = useState(DEFAULT_CITY_ID);
  const handleLoadCities = inputValue =>
    api.weather.getCities(inputValue).then(res =>
      res.map(city => ({
        value: city.woeid,
        label: city.title
      }))
    );
  const handleSelectCity = selectedOption => {
    setSelectedCity(selectedOption.value);
  };
  return (
    <div>
      <h1>Weather today</h1>
      <div className="select-wrapper">
        <AsyncSelect
          inputId={'1'}
          placeholder={'Search for your city'}
          cacheOptions
          loadOptions={handleLoadCities}
          onChange={handleSelectCity}
        />
      </div>
      {selectedCity && <WeatherForecast cityId={selectedCity} />}
    </div>
  );
};

export default Home;
