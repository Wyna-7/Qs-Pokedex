import axios from 'axios';
const baseURL = "https://pokeapi.co/api/v2/pokemon/?limit=100";

const getPokemonList = async () => {
  try {
    const pokeData = (await axios.get(baseURL)).data;
    
    const pokeList = await Promise.all(pokeData.results.map(async (element) => {
      const poke = (await axios.get(element.url)).data
      return poke
    }));

    return pokeList;
  } catch (error) {
    console.error('Failed to get Pokémon: ', error)

  }
} 

export {getPokemonList}