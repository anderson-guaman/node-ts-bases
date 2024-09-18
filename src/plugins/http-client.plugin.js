
const axios = require('axios')

// patron adaptador con el rapert al fect API
const httpClientPlugin = {
    get : async (url) => {
        // !fetch API
        // const resp = await fetch(url);
        // return await resp.json();

        // ? axios API CLIENTE HTTP
        const {data} = await axios.get(url); // desestructuro la data 
        return data
        // return await resp.json(); en axios no necesitas llamar a json ya que la data devuelve completamente leible 
    },

    post : async (url,body) => {},
    put : async (url,body) => {},
    delete : async (url,body) => {},
};

module.exports = {
    http: httpClientPlugin, // se renombra la funcion a http
}