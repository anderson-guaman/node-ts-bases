const getIdPlugin = require('uuid')


// function getUUID() {
//     return getIdPlugin.v4();
// }

const getUUID = ()=> getIdPlugin.v4();

module.exports = {
    getUUID,
};