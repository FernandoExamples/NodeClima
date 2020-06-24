const axios = require('axios');
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?';

const getClima = async (lat, lon) => {
  try {
    let respuesta = await axios.get(baseURL, {
      params: {
        lat,
        lon,
        appid: 'aeeb0cb1f91be6e91250d89b9fbcb0a6',
        units: 'metric',
        lang: 'es',
      },
    });
    // console.log(respuesta.data);
    let data = respuesta.data;
    return {
      clima: data.weather[0],
      vars: data.main,
      viento: data.wind,
      nombre: data.name,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getClima,
};
