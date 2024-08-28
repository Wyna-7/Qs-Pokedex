import { useEffect, useState } from 'react';
import useOnMountUnsafe from '../hooks/useOnMountUnsafe';
import Navbar from '../components/Navbar';
import PokeList from '../components/PokeList';
import FilterModal from '../components/FilterModal';
import { getPokemonList } from '../services/ApiClient';
import { Filters, Pokemon } from '../types';
import Loading from '../components/Loading';

const Home = () => {
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);
  const [displayPokemon, setDisplayPokemon] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<Filters>({
    types: [],
    games: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useOnMountUnsafe(() => {
    getPokemonList()
      .then((res) => {
        setAllPokemon(res || []);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  useEffect(() => {
    if (!search && !selectedFilters.types.length) {
      setDisplayPokemon(allPokemon);
    }

    const filteredPokemon = allPokemon.filter((poke) => {
      if (search && !poke.name.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }

      const typeFilterResult = selectedFilters.types.some((t) => poke.types.includes(t));
      if (selectedFilters.types.length && !typeFilterResult) {
        return false;
      }

      const gameFilterResult = selectedFilters.games.some((g) => poke.game_indices.includes(g));
      if (selectedFilters.games.length && !gameFilterResult) {
        return false;
      }

      return true;
    });

    setDisplayPokemon(filteredPokemon);
  }, [search, selectedFilters, allPokemon]);

  const handleFilterModalClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (loading && !displayPokemon.length) {
    return <Loading />;
  }

  return (
    <div className='main-container flex flex-row align-middle m-0 p-0 size-full bg-slate-50 overflow-y-scroll'>
      <Navbar setSearch={setSearch} search={search} handleFilterModalClick={handleFilterModalClick} />
      <PokeList pokemon={displayPokemon} />
      {isModalOpen && (
        <FilterModal
          closeModal={handleFilterModalClick}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      )}
    </div>
  );
};

export default Home;
