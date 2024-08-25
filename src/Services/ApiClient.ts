import axios from 'axios';
const baseURL = 'https://pokeapi.co/api/v2';

const getPokemonList = async () => {
  try {
    const pokeData = (await axios.get(baseURL + '/pokemon/?limit=100')).data.results;
    const pokeList = await Promise.all(
      pokeData.map(async (e) => {
        const poke = (await axios.get(e.url)).data;
        return poke;
      })
    );
    return pokeList;
  } catch (error) {
    console.error('Failed to get Pokémon: ', error);
  }
};

const getPokemonTypes = async () => {
  try {
    const typesData = (await axios.get(baseURL + '/type/?limit=18')).data.results;
    const typesList = typesData.map((type) => {
      return type.name;
    });
    return typesList;
  } catch (error) {
    console.error('Failed to get Pokemon types: ', error);
  }
};

// const getPokemonGames = async () => {
//   try {
//     const gamesData = (await axios.get(baseURL + '/generation')).data.results;
//     const gamesList = await Promise.all(
//       gamesData.map(async (e) => {
//         const game = (await axios.get(e.url)).data.version_groups[0].name;
//         return game;
//       })
//     );
//     console.log('gamesList', gamesList);
//     return gamesList;
//   } catch (error) {
//     console.error('Failed to get Pokemon games: ', error);
//   }
// };

export { getPokemonList, getPokemonTypes };
