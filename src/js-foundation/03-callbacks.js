

const users = [
    { id: 1, name: 'Diego' },
    { id: 2, name: 'Maria' },
    { id: 3, name: 'Juan' },
];

function getUserById(id, callback) {
    const user = users.find(function (user) {
        return user.id === id;
    });
    //console.log(user)
    if (!user) {
        return callback(`User with id ${id} not found`);
    }
    callback(null, user);
}
module.exports = {
    getUserById
};