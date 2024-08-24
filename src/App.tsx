import axios from 'axios';
import { useEffect, useState } from 'react';
import useOnMountUnsafe from './Hooks/useOnMountUnsafe';
import Navbar from './Components/Navbar';
import PokeList from './Components/PokeList';
import FilterModal from './Components/FilterModal/FilterModal';
import { getPokemonList } from './Services/ApiClient';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon/?limit=100');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useOnMountUnsafe(() => {
    getPokemonList()
      .then((res) => {
        setPokemon(res);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  useEffect(() => {
    const searchResult = pokemon.filter((poke) => {
      return poke.name.toLowerCase().includes(search.toLowerCase());
    });
    setSearchedPokemon(searchResult);
  }, [search]);

  const handleFilterModalClick = () => {
    console.log('isModalOpen', isModalOpen);
    setIsModalOpen(!isModalOpen);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='main-container m-0 p-0 size-full bg-orange-300'>
        <Navbar
          setSearch={setSearch}
          search={search}
          isModalOpen={isModalOpen}
          handleFilterModalClick={handleFilterModalClick}
        />
        <PokeList pokemon={pokemon} searchedPokemon={searchedPokemon} search={search} />
        {/* <button onClick={loadPrevPage}>Previous</button> */}
        {/* <button className= ' justify-self-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'  onClick={loadNextPage}>Show more</button> */}
        {isModalOpen && <FilterModal handleFilterModalClick={handleFilterModalClick} />}
      </div>
    </>
  );
}

export default App;
