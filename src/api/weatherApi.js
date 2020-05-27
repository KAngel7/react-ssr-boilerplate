export function weatherApi(http) {
  return {
    getCities: searchKey => {
      return http.get(`/api/location/search?query=${searchKey}`);
    },
    getWeather: cityId => {
      return http.get(`/api/location/${cityId}`);
    }
  };
}
