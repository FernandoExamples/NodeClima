const { argv } = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let direccion = argv.direccion;

// lugar
//   .getLugarLatLng(direccion)
//   .then((latlon) => {
//     if (latlon) {
//       console.log(latlon);
//     } else {
//       console.log('No hay direccion para', direccion);
//     }
//   })
//   .catch((error) => console.log(error));

// clima
//   .getClima(35, 139)
//   .then((resp) => {
//     if (resp) {
//       console.log(resp);
//     } else {
//       console.log('Sin resultados');
//     }
//   })
//   .catch((error) => console.log(error));

//Conectar dos promesas seguidas
lugar
  .getLugarLatLng(direccion)
  .then((latlon) => {
    if (latlon) return clima.getClima(latlon.lat, latlon.lon);
    else return null;
  })
  .then((resp) => {
    if (resp) console.log(resp);
    else console.log('No hay datos para', direccion);
  })
  .catch((err) => {
    console.log(err);
  });
