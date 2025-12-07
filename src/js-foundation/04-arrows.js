

const users = [
    { id: 1, name: 'Diego' },
    { id: 2, name: 'Maria' },
    { id: 3, name: 'Juan' },
];

const getUserById = (id, callback) => {
    const user = users.find((user) =>  user.id === id);
    //console.log(user)
    user ? callback(null, user) : callback(`User with id ${id} not found`);   
}
module.exports = {
    getUserById
};