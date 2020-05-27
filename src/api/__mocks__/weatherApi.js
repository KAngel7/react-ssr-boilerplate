export function weatherApi(http) {
  return {
    getCities: searchKey => {
      return new Promise(resolve => {
        resolve([]);
      });
    },
    getWeather: cityId => {
      return new Promise(resolve => {
        resolve({
          title: 'Ho Chi Minh Test',
          time: '2020-05-27T10:52:55.139620+07:00',
          consolidated_weather: []
        });
      });
    }
  };
}
