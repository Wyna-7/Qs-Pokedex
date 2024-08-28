import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import { Filters, Pokemon } from '../types';
import { filterPokemon } from '../utils/HelperFnc';

describe('Home page', () => {
  describe('when page is loading', () => {
    it('should display loading screen', () => {
      render(<Home />);
      expect(screen.getByTestId('loading-screen')).toBeDefined();
    });
  });
});

describe('filterPokemon helper function', () => {
  const allPokemon: Pokemon[] = [
    {
      id: 1,
      name: 'bulbasaur',
      image: 'image',
      gif_front: 'gif front',
      gif_back: 'gif back',
      types: ['grass', 'poison'],
      abilities: ['overgrow', 'chlorophyll'],
      stats: [{ name: 'hp', value: 100 }],
      game_indices: ['red', 'blue', 'yellow'],
    },
    {
      id: 1,
      name: 'cyndaquil',
      image: 'image',
      gif_front: 'gif front',
      gif_back: 'gif back',
      types: ['fire'],
      abilities: ['blaze', 'flash-fire'],
      stats: [{ name: 'hp', value: 100 }],
      game_indices: ['gold', 'silver', 'crystal'],
    },
    {
      id: 1,
      name: 'mudkip',
      image: 'image',
      gif_front: 'gif front',
      gif_back: 'gif back',
      types: ['water'],
      abilities: ['torrent', 'damp'],
      stats: [{ name: 'hp', value: 100 }],
      game_indices: ['ruby', 'sapphire', 'emerald'],
    },
  ];

  it('should return all Pokémon when no search or filters are applied', () => {
    const search = '';
    const selectedFilters: Filters = { types: [], games: [] };

    const result = filterPokemon(search, selectedFilters, allPokemon);

    expect(result).toEqual(allPokemon);
  });

  it('should filter Pokémon by name', () => {
    const search = 'cyn';
    const selectedFilters: Filters = { types: [], games: [] };

    const result = filterPokemon(search, selectedFilters, allPokemon);

    expect(result).toEqual([
      {
        id: 1,
        name: 'cyndaquil',
        image: 'image',
        gif_front: 'gif front',
        gif_back: 'gif back',
        types: ['fire'],
        abilities: ['blaze', 'flash-fire'],
        stats: [{ name: 'hp', value: 100 }],
        game_indices: ['gold', 'silver', 'crystal'],
      },
    ]);
  });

  it('should filter Pokémon by type', () => {
    const search = '';
    const selectedFilters: Filters = { types: ['water'], games: [] };

    const result = filterPokemon(search, selectedFilters, allPokemon);

    expect(result).toEqual([
      {
        id: 1,
        name: 'mudkip',
        image: 'image',
        gif_front: 'gif front',
        gif_back: 'gif back',
        types: ['water'],
        abilities: ['torrent', 'damp'],
        stats: [{ name: 'hp', value: 100 }],
        game_indices: ['ruby', 'sapphire', 'emerald'],
      },
    ]);
  });

  it('should filter Pokémon by game', () => {
    const search = '';
    const selectedFilters: Filters = { types: [], games: ['red', 'yellow'] };

    const result = filterPokemon(search, selectedFilters, allPokemon);

    expect(result).toEqual([
      {
        id: 1,
        name: 'bulbasaur',
        image: 'image',
        gif_front: 'gif front',
        gif_back: 'gif back',
        types: ['grass', 'poison'],
        abilities: ['overgrow', 'chlorophyll'],
        stats: [{ name: 'hp', value: 100 }],
        game_indices: ['red', 'blue', 'yellow'],
      },
    ]);
  });

  it('should filter Pokémon by name, type, and game', () => {
    const search = 'saur';
    const selectedFilters: Filters = { types: ['grass'], games: ['blue'] };

    const result = filterPokemon(search, selectedFilters, allPokemon);

    expect(result).toEqual([
      {
        id: 1,
        name: 'bulbasaur',
        image: 'image',
        gif_front: 'gif front',
        gif_back: 'gif back',
        types: ['grass', 'poison'],
        abilities: ['overgrow', 'chlorophyll'],
        stats: [{ name: 'hp', value: 100 }],
        game_indices: ['red', 'blue', 'yellow'],
      },
    ]);
  });

  it('should return an empty array when no Pokémon match the filters', () => {
    const search = 'xyz';
    const selectedFilters: Filters = { types: ['fairy'], games: ['purple'] };

    const result = filterPokemon(search, selectedFilters, allPokemon);

    expect(result).toEqual([]);
  });
});
