import { Router } from 'express';
var request = require('request');

export const weatherRoutes = () => {
  const weatherRoutes = new Router();

  weatherRoutes.get('/api/location/search', (_req, res) => {
    if (_req.query.query) {
      request(
        `https://www.metaweather.com/api/location/search/?query=${_req.query.query}`,
        function(error, response, body) {
          if (!error) {
            res.json(JSON.parse(response.body));
          } else {
            throw new Error('Error');
          }
        }
      );
    } else {
      res.json([]);
    }
  });

  weatherRoutes.get('/api/location/:cityId', (_req, res) => {
    const cityId = _req.param('cityId');
    request(`https://www.metaweather.com/api/location/${cityId}`, function(
      error,
      response,
      body
    ) {
      res.json(JSON.parse(response.body));
    });
  });

  return weatherRoutes;
};
