import { useEffect, useState } from 'react';
import useOnMountUnsafe from '../Hooks/useOnMountUnsafe';
import Navbar from '../Components/Navbar/Navbar';
import PokeList from '../Components/PokeList/PokeList';
import FilterModal from '../Components/FilterModal/FilterModal';
import { getPokemonList } from '../Services/ApiClient';
const Home = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [displayPokemon, setDisplayPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    types: [],
    games: [],
    generations: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useOnMountUnsafe(() => {
    getPokemonList()
      .then((res) => {
        setAllPokemon(res);
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
      const typeFilterResult =
        selectedFilters.types.includes(poke.types[0].type.name) ||
        (poke.types.length === 2 && selectedFilters.types.includes(poke.types[1].type.name));

      if (selectedFilters.types.length && !typeFilterResult) {
        return false;
      }

      const pokeGameList = poke.game_indices.map((index) => index.version.name);
      const gameFilterResult = selectedFilters.games.some((g) => pokeGameList.includes(g));

      if (selectedFilters.games.length && !gameFilterResult) {
        return false;
      }

      return true;
    });
    setDisplayPokemon(filteredPokemon);
  }, [search, selectedFilters, allPokemon]);

  const handleFilterModalClick = () => {
    console.log('isModalOpen', isModalOpen);
    setIsModalOpen(!isModalOpen);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='main-container flex flex-row  align-middlet m-0 p-0 size-full bg-orange-300'>
        <Navbar
          setSearch={setSearch}
          search={search}
          isModalOpen={isModalOpen}
          handleFilterModalClick={handleFilterModalClick}
        />
        <PokeList pokemon={displayPokemon} />
        {isModalOpen && (
          <FilterModal
            closeModal={handleFilterModalClick}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        )}
      </div>
    </>
  );
};

export default Home;
