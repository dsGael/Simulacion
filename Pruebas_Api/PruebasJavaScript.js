const axios = require('axios');

const baseUrl = 'http://localhost:3000/productos';

const producto = {
  id: 1122334455667,
  nombre: 'Node Choco',
  precio: 7.25,
  image: 'nodechoco.png',
};

(async () => {
  try {
    const create = await axios.post(baseUrl, producto);
    console.log('Crear:', create.status, create.data);

    const list = await axios.get(baseUrl);
    console.log('Listar:', list.status, list.data.length);

    const getOne = await axios.get(`${baseUrl}/${producto.id}`);
    console.log('Obtener:', getOne.status, getOne.data);

  } catch (err) {
    console.error(err.response?.data || err.message);
  }
})();
