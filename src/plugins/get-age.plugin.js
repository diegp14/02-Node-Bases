

const getAge = (birthday) => { 
    return new Date().getFullYear() - new Date(birthday).getFullYear();
};

module.exports = {
    getAge
};