import React, { useState, useEffect } from 'react';

import { api } from '../../api';

const WeatherForecast = ({ cityId }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const result = await api.weather.getWeather(cityId);
      setData(result);
      setIsLoading(false);
    }
    fetchData();
  }, [cityId]);
  return (
    <section className="closest">
      {isLoading ? (
        'Loading...'
      ) : (
        <div className="row weather weather-sml" data-testid="weather-list">
          <div className="col-lg-12">
            <h2>
              <a href="/">{data.title}</a>
            </h2>
            <p>{`Updated at ${new Date(data.time).toLocaleString()}`}</p>
          </div>
          {data.consolidated_weather.map((weather, i) => (
            <div key={i} className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
              <h3>
                <a href="/">
                  {i === 0
                    ? 'Today'
                    : new Date(weather.applicable_date).toDateString()}
                </a>
              </h3>
              <dl>
                <dt>Weather</dt>
                <dd className="weatherstate">
                  <div className="state-icon-sml">
                    <img
                      src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`}
                      alt="img"
                    />
                  </div>
                  <span>{weather.weather_state_name}</span>
                </dd>
                <dt>Temperature</dt>
                <dd>
                  {`Max: ${weather.max_temp.toFixed(0)}°C`}
                  <br />
                  {`Min: ${weather.min_temp.toFixed(0)}°C`}
                </dd>
              </dl>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default WeatherForecast;
