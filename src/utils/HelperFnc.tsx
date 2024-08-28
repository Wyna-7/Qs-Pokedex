import { Filters, Pokemon } from '../types';

const filterPokemon = (search: string, selectedFilters: Filters, allPokemon: Pokemon[]) => {
  if (!search && !selectedFilters.types.length && !selectedFilters.games.length) {
    return allPokemon;
  }
  return allPokemon.filter((poke) => {
    const matchesSearch = !search || poke.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = !selectedFilters.types.length || selectedFilters.types.some((t) => poke.types.includes(t));
    const matchesGame =
      !selectedFilters.games.length || selectedFilters.games.some((g) => poke.game_indices.includes(g));
    return matchesSearch && matchesType && matchesGame;
  });
};

export { filterPokemon };
