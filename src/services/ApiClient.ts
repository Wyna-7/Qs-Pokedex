import axios from 'axios';
import { Pokemon } from '../types';
const baseURL = 'https://pokeapi.co/api/v2';

const getPokemonList = async (): Promise<Pokemon[] | undefined> => {
  try {
    const pokeData = (await axios.get(baseURL + '/pokemon/?limit=700&offset=0')).data.results;
    const pokeList: Pokemon[] = await Promise.all(
      pokeData.map(async (e: { url: string }) => {
        const poke = (await axios.get(e.url)).data;
        return {
          id: poke.id,
          name: poke.name,
          image: `${poke.sprites.other.home.front_default}`,
          gif_front: `${poke.sprites.other.showdown.front_default}`,
          gif_back: `${poke.sprites.other.showdown.back_default}`,
          types: poke.types.map((type: { type: { name: string } }) => {
            return type.type.name;
          }),
          abilities: poke.abilities.map((ability: { ability: { name: string } }) => {
            return ability.ability.name;
          }),
          stats: poke.stats.map((stat: { stat: { name: string }; base_stat: number }) => {
            return { name: stat.stat.name, value: stat.base_stat };
          }),
          game_indices: poke.game_indices.map((index: { version: { name: string } }) => index.version.name),
        };
      })
    );
    return pokeList;
  } catch (error) {
    console.error('Failed to get Pokémon: ', error);
  }
};

const getPokemonTypes = async (): Promise<string[] | undefined> => {
  try {
    const typesData = (await axios.get(baseURL + '/type/?limit=18')).data.results;
    const typesList = typesData.map((type: { name: string }) => {
      return type.name;
    });
    return typesList;
  } catch (error) {
    console.error('Failed to get Pokemon types: ', error);
  }
};

const getPokemonGames = async (): Promise<string[] | undefined> => {
  try {
    const gamesData = (await axios.get(baseURL + '/version?limit=22&offset=0')).data.results;
    const gamesList = gamesData.map((element: { name: string }) => {
      return element.name;
    });
    return gamesList;
  } catch (error) {
    console.error('Failed to get Pokemon games: ', error);
  }
};

export { getPokemonList, getPokemonTypes, getPokemonGames };
