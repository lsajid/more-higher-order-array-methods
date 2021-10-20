const examplePokemonData = require("../data/pokemon_data.js");
const ghostPokemonData = require("../data/ghostPokemon_data");
const pokemon = require("../data/pokemon_data.js");

/**
 *
 *
 *
 * * filterByType
 *
 * Returns a filtered array of only a certain type of pokemon. Should make use of .filter
 * If no pokemon of the given type are found, should return an empty array []
 * @param {Object[]} pokemonArr - An array of pokemon. See the pokemon data for more.
 * @param {string} type - A string representing a pokemon type.
 * @returns {Object[]} A filtered array of pokemon objects. Only pokemon of the inputted `type` should be included.
 *
 *  EXAMPLE:
 *  filterByType(examplePokemonData, 'water');
 *  > [
 * ... Squirtle ..., //each of these elements should be a whole object.
 * ... Lapras ...,   //these are just shortened versions for example purposes.
 * ... Poliwag ...,
 * ... Gyarados ...,
 * ... Cloyster ...
 * ]
 */
function filterByType(givenArray, type) {
  //basically .filter applies the callback function once for each element and constructs a new array of all the values for which the callback function is true
  let filteredArray = givenArray.filter(pokemon => pokemon.type === type);
  return filteredArray;
}
console.log("~~~FILTER POKEMON OBJ BY TYPE ~~~", filterByType(examplePokemonData, "water"))
/**
 *
 *
 *
 * * filterNamesByType
 *
 * * This function is similar to the last one, but this time we want only the pokemon's names, not the whole object.
 * * You will have to make use of .filter AND .map
 *
 * Returns a filtered array of names of only a certain type of pokemon. Should make use of .filter and .map
 * If no pokemon of the given type are found, should return an empty array []
 * @param {Object[]} pokemonArr - An array of pokemon. See the pokemon data for more.
 * @param {string} type - A string representing a pokemon type.
 * @returns {string[]} A filtered array of pokemon names. Only pokemon of the inputted `type` should be included.
 *
 * EXAMPLE:
 * filterNamesByType(examplePokemonData, 'water')
 *  > [Squirtle, Poliwag, Gyarados, Cloyster]
 */

function isTheSame(a, b){
  if(a.type === b){
    return true
  }
}

function filterNamesByType(givenArray, type) {
//basically the .filter method applies the callback function once for each element and returns a new array of all the values for which the callback function is true
  
  let answer = givenArray.filter((el)=> el.type === type).map((el)=> el.name);
  return answer;
}
console.log("~~~FILTER NAMES BY TYPE",filterNamesByType(examplePokemonData, "water"))
/**
 *
 *
 *
 * * filterNamesByStrength
 *
 * * This function is similar to the last one, but this time we want to filter by each pokemon's `strongAgainst` property.
 * * You will have to make use of .filter AND .map
 *
 * Returns a filtered array of names of only a certain type of pokemon. Should make use of .filter and .map
 * If no pokemon of the given type are found, should return 'Sorry, could not find any pokemon that are strong against type: "<inputted type>".'
 * @param {Object[]} pokemonArr - An array of pokemon. See the pokemon data for more.
 * @param {string} type - A string representing a pokemon type.
 * @returns {string[]} A filtered array of pokemon names.
 * Only pokemon that have the inputted `type` in their `strongAgainst` property should be included.
 *
 * EXAMPLE:
 * filterNamesByStrength(examplePokemonData, 'ice')
 *  > [Charmander, Bulbasaur, Onix]
 */
function filterNamesByStrength(givenArray, type) {
  let answer = givenArray.filter((el)=> el.strongAgainst.includes(type)).map((el)=> el.name);
  return answer;
}
console.log("~~~FILTER NAMES BY STRENGTH",filterNamesByStrength(examplePokemonData, "ice"))

module.exports = {
  filterByType,
  filterNamesByType,
  filterNamesByStrength,
};
