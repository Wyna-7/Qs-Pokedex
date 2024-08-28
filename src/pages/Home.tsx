//@ts-expect-error React is not used but import needed for test
import React, { useEffect, useState } from 'react';
import useOnMountUnsafe from '../hooks/useOnMountUnsafe';
import Navbar from '../components/Navbar';
import PokeList from '../components/PokeList';
import FilterModal from '../components/FilterModal';
import { getPokemonList } from '../services/ApiClient';
import { Filters, Pokemon } from '../types';
import { filterPokemon } from '../utils/HelperFnc';
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
    try {
      getPokemonList()
        .then((res) => {
          setAllPokemon(res || []);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error('There was an error getting the Pokémon: ', error);
    }
  });

  useEffect(() => {
    setDisplayPokemon(filterPokemon(search, selectedFilters, allPokemon));
  }, [search, selectedFilters, allPokemon]);

  const handleFilterModalClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className='main-container flex flex-col align-middle m-0 p-0 size-full bg-slate-50 overflow-y-scroll'>
      <Navbar setSearch={setSearch} search={search} handleFilterModalClick={handleFilterModalClick} />
      {loading && !displayPokemon.length ? <Loading /> : <PokeList pokemon={displayPokemon} loading={loading} />}
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
