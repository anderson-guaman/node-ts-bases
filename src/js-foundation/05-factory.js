// const {getUUID : uuidv4} = require ('../plugins/get-id.plugin');
// const {getAge} = require('../plugins/get-age.plugin')

// const {getAge, getUUID} = require('../plugins');


const buildMakePerson = ({getUUID, getAge}) => {
    return ({ name, birthdate}) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age  : getAge(birthdate),
        }
    }
}


// const obj = { name : 'Jhon', birthdate: '2002-09-14'};

// const john = buildPerson(obj);

// console.log(john);

module.exports = {
    buildMakePerson,
}