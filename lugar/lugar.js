const axios = require('axios');

//Definir una configuracion para cada peticion
let baseURL = 'https://api.opencagedata.com/geocode/v1/json?';

const getLugarLatLng = async (direccion) => {
  //Escapamos el argumento para que tenga el formato correcto
  let encodedDirection = encodeURI(direccion);
  let axiosConfig = {
    params: {
      key: 'b33a177e1b334a0695b98ed94ed03335',
      q: encodedDirection,
      no_annotations: 1, //para que la respuesta sea mas corta
      limit: 1, //limitar la respuesta de la API a un objeto
    },
  };

  try {
    let response = await axios.get(baseURL, axiosConfig);
    let result = response.data.results[0];
    // console.log(result);
    
    if (result) {
      return {
        lon: result.geometry['lng'],
        lat: result.geometry['lat'],
        direccion: {
          pais: result.components.country,
          estado: result.components.state,
          ciudad: result.components.county
        }
      };
    } else return null;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getLugarLatLng,
};
