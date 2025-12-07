
//const { emailTemplate } = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
//const { getUserById } = require('./js-foundation/04-arrows');

const { buildMakePerson } = require('./js-foundation/05-factory');
const { getId, getAge } = require('./plugins');
const { getPokemonById, getPokemonByIdAsync, getPokemonByIdAdapter } = require('./js-foundation/06-promises');

// const userId = 2;

// getUserById(userId, (error, user) => {
//     if (error) throw new Error(error);
    
//     console.log(user);
// });
//console.log(emailTemplate);


// Example Factory Function Usage and injection of dependencies
//const makePerson = buildMakePerson({ getId, getAge }) ;
//console.log(makePerson({ name: 'Diego', birthday: '1990-10-21' }));



// Example Promise Usage
const pokemonId = 25;
const pokemon = getPokemonById(pokemonId).then((name) => {
    console.log(`Promise: ${name}`);
}).catch((error) => {
    console.error('Error fetching Pokemon:', error);
});


const fetchPokemon = async (id) => { 
    const name = await getPokemonByIdAsync(id);
    console.log(`Async/Await: ${name}`);
}

const fetchPokemonAdapter = async (id) => { 
    const name = await getPokemonByIdAdapter(id);
    console.log(`Adapter: ${name}`);
}

fetchPokemon(pokemonId);
fetchPokemonAdapter(pokemonId);