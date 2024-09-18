

// !utiliacion de callback
// const getPokemonById = (id,callbacks) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     fetch (url).then( (response) =>{
//         response.json().then( (pokemon) =>{
//             // console.log(pokemon.name)
//             callbacks(pokemon.name)
//         })
//     });

// }

// !callbacks optimizacion de lineas de codigo 
// const getPokemonById = (id,callbacks) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     fetch (url)
//     .then( (response) =>  response.json())
//     .then ( (pokemon) => (pokemon));

// }


// ! PROMESAS
// const getPokemonById = (id) => {
//         const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
//         return fetch (url)
//         .then( (response) =>  response.json())
//         // .then( () => {throw new Error('Pokemon no existe')} )
//         .then ( (pokemon) => (pokemon.name));
    
// }


// ! PROMESAS CON ASYNC / AWAIT
// const getPokemonById = async (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     // throw new Error ('Pokemon no existe');
//     return pokemon.name
// }

const {http} = require('../plugins')

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get(url);
    return pokemon.name;
}

module.exports = {
    getPokemonById,
}