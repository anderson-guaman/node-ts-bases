
// const emailExport = require('./js-foundation/01-template')

// require('./js-foundation/02-destructuring')


// require('./js-foundation/03-callbacks')

// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');



// console.log(emailExport.emailTemplate)
// const id = 1;



// getUserById(id, function(error, user){
//     if ( error ) {
//         throw new Error(error,id);
//     }
//     console.log(user);
// });


// getUserById(id,(error,user)=>{
//     if ( error ) throw new Error(error,id);
//     console.log(user);
// });



// ! Reeferencia a la función factory y uso 
// const {buildMakePerson} = require('./js-foundation/05-factory')
// const {getAge, getUUID} = require('./plugins')
// const makePerson = buildMakePerson( { getAge, getUUID});
// const obj = { name : 'John', birthdate: '2002-09-14'}
// const jhon = makePerson(obj)
// console.log(jhon)


const {getAge, getUUID} = require('./plugins')
const {getPokemonById} = require('./js-foundation/06-promises')

// console.log( getPokemonById(2)) 
//  llamado de la funcioón por callbacks

getPokemonById(4)
    .then( ( pokemon ) => console.log ( {pokemon}))
    .catch( (error) => console.log('Por favor intente de nuevo'))
    .finally( () => console.log('Finalmente'))
