const { httpClient } = require('../plugins');

const getPokemonById = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => data.name)
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
            
        });
};

const getPokemonByIdAsync = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.name;
    } catch (error) {  
        console.error('There has been a problem with your fetch operation:', error);
    }
}

const getPokemonByIdAdapter = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
        const data = await httpClient.get(url);
        return data.name;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

module.exports = { getPokemonById, getPokemonByIdAsync, getPokemonByIdAdapter };