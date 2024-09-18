const {getUUID} = require('../plugins/get-id.plugin');  // al poner solo . no toma de la carpeta en q se encuentra si no en el global 
const {getAge} = require('../plugins/get-age.plugin');
const {http} = require('../plugins/http-client.plugin');

module.exports = {
    getAge,
    getUUID,
    http,
}