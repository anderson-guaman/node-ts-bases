const users = [
    {
        id : 1,
        name : 'Jhon Doe',
    },
    {
        id : 2,
        name : 'Jane Doe',
    }
]

// const getUserById = (id, callback)=>{
//     const user = users.find((user)=> user.id == id);

//     if(!user){
//         return callback(`User not found with this id: ${id}`);
//     }

//     return callback(null,user);
// }



const getUserById = (id,callback) => {
    const user = users.find(user => user.id == id);
    (user) 
        ? callback(null,user)
        : callback(`User not found with id ${id}`); 
}


module.exports = {
    getUserById,
}