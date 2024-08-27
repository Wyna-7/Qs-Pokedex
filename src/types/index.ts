//Props for components

export interface NavBarProps {
  search: string;
  setSearch: (value: string) => void;
  handleFilterModalClick: () => void;
}

export interface FilterModalProps {
  closeModal: () => void;
  selectedFilters: Filters;
  setSelectedFilters: (value: { types: string[]; games: string[] }) => void;
}

//Types
export interface Filters {
  types: string[];
  games: string[];
}

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  gif_front: string;
  gif_back: string;
  types: string[];
  abilities: string[];
  stats: Stat[];
  game_indices: string[];
}

interface Stat {
  name: string;
  value: number;
}
