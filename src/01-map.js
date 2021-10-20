const examplePokemonData = require("../data/pokemon_data.js");
const ghostPokemonData = require("../data/ghostPokemon_data");

/**
 *
 *
 *
 * * getPokemonNames
 *
 * Returns an array of all pokemon names. Should make use of .map
 * If pokemon array is empty, should throw an error.
 * @param {Object[]} pokemonArr - An array of pokemon. See the pokemon data for more.
 * @returns {string[]} An array of strings, all of which are pokemon names.
 *
 * EXAMPLE:
 * getPokemonNames(examplePokemonData);
 * > [Pikachu, Charmander, Bulbasaur, Squirtle, Gengar, etc....]
 *
 * ^^^ This is not the complete list of names, but you get the idea ^^^
 *
 */
function getPokemonNames(pokemonArr) {
  if(pokemonArr.length === 0){
    throw `Error`;
  }
  let ans = pokemonArr.map(poke => poke.name);
  return ans;
}
console.log("~~GET POKEMON NAME~~", getPokemonNames(ghostPokemonData))
/**
 *
 * 
 * 
 * * addCaughtProperty
 * 
 * * Reminder of how to add property to an existing object:
 * * let obj = {name: "Deloba", weight: "14 lbs"}    <-- `obj` is the existing object
 * * obj.birthday = "01/10/2013"              <--  set new key/value pair on `obj`
 * 
 * obj now has an added birthday property.
 * console.log(obj)
 * > {
 *  name: "Deloba",
 *  weight: "14 lbs"
 *  birthday: "01/10/2013"
 * }
 *
 * Returns an array of pokemon with an added key value pair where the key is `caught` and the value is `false`. Should make use of .map
 * If pokemon array is empty, throw an error.
 * @param {Object[]} pokemonArr - An array of pokemon. See the pokemon data for more.
 * @returns {Object[]} A modified array of pokemon objects. Each pokemon object should have a new key value pair.
 *
 *  EXAMPLE:
 * addCaughtProperty(examplePokemonData)
 * > [
 * {
    name: "Pikachu",
    species: "Mouse Pokemon",
    type: "electric",
    weaknesses: "ground",
    strongAgainst: "flying, water",
    moves: [
      {
        name: "thunderbolt",
        type: "electric",
      },
      {
        name: "growl",
        type: "normal",
      },
      {
        name: "spark",
        type: "electric",
      },
    ],
    caught: false            <--- This new key value pair should be added to every pokemon object in the array.
  },
  ....                        //For the sake of space, I won't include the rest of them.
 * ]
 */
function addCaughtProperty(pokemonArr) {
  
  return pokemonArr.map(pokemonObj => {
    pokemonObj.caught = false;
    return pokemonObj
  })
}
console.log("~~~~ADD CAUGHT PROPERTY~~~",addCaughtProperty(examplePokemonData));
/**
 *
 *
 * 
 * * Reminder of syntax for how to add property to an existing object with VARIABLES:
 * * let obj = {name: "Deloba", weight: "14 lbs"}    <-- `obj` is the existing object
 * * let key = age                                   <-- set `key` variable
 * * let value = 8                                   <-- set `value` variable
 * * obj[key] = value                                <--  set new key/value pair on `obj` using variables
 * 
 * * addAnyProperty
 * 
 * *This one is similar to the last one, but the key value pair can be anything.
 * *Whatever key and value are passed in as arguments, those will be the new key value pair added to each object in the array.
 *
 * Returns an array of pokemon with an added key value pair. Should make use of .map
 * If pokemon array is empty, throw an error.
 * @param {Object[]} pokemonArr - An array of pokemon. See the pokemon data for more.
 * @param {string} key - A string representing the key to be added to each pokemon object.
 * @param {anything} value - Any data type representing the value of the new key.
 * @returns {Object[]} A modified array of pokemon objects. Each pokemon object should have a new key value pair.
 *
 *  EXAMPLE:
 * addAnyProperty(examplePokemonData, 'ageInYears', 0)
 * > [
 * {
    name: "Pikachu",
    species: "Mouse Pokemon",
    type: "electric",
    weaknesses: "ground",
    strongAgainst: "flying, water",
    moves: [
      {
        name: "thunderbolt",
        type: "electric",
      },
      {
        name: "growl",
        type: "normal",
      },
      {
        name: "spark",
        type: "electric",
      },
    ],
    ageInYears: 0            <--- This new key value pair should be dynamic. It should be added to every pokemon object in the array.
  },
  ....                      //For the sake of space, I won't include the rest of them.
 * ]
 */
function addAnyProperty(givenArray, key, valueOfKey) {
  return givenArray.map((pokemonObj)=>{
    pokemonObj[key] = valueOfKey;
    return pokemonObj
  })
}
console.log("~~~~~ADD ANY PROPERTY~~~~~~",addAnyProperty(examplePokemonData, "ageInYears", 2))
module.exports = {
  getPokemonNames,
  addCaughtProperty,
  addAnyProperty,
};
