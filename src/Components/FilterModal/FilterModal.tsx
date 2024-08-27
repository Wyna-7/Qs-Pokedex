import { useEffect, useState } from 'react';
import { getPokemonTypes, getPokemonGames } from '../../Services/ApiClient';

const FilterModal = ({ closeModal, selectedFilters, setSelectedFilters }) => {
  const [formData, setFormData] = useState({
    types: [],
    games: [],
  });
  const [filters, setFilters] = useState({
    types: [],
    games: [],
  });

  useEffect(() => {
    getPokemonTypes().then((res) => {
      setFormData((prevFormData) => ({ ...prevFormData, types: res }));
    });
    getPokemonGames().then((res) => {
      setFormData((prevFormData) => ({ ...prevFormData, games: res }));
    });
    setFilters(selectedFilters);
  }, []);

  const handleChange = (event) => {
    let { name, id, checked } = event.target;
    if (checked) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [id]: [...prevFilters[id], name],
      }));
    } else {
      setFilters((prevFilters) => {
        const updatedTypes = prevFilters.types.filter((item) => item !== name);
        const updatedGames = prevFilters.games.filter((item) => item !== name);
        return {
          ...prevFilters,
          types: updatedTypes,
          games: updatedGames,
        };
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedFilters(filters);
    closeModal();
  };

  return (
    <div className='filter-modal flex fixed z-100 w-[100vw] h-[100vh]'>
      <div className='overlay size-full absolute top-0 bg-[rgba(49,49,49,0.8)]' onClick={closeModal}></div>
      <div className='form-wrapper'>
        <form className='form absolute top-1/4 left-1/4 bg-slate-50 rounded p-5 w-1/2 h-1/2' onSubmit={handleSubmit}>
          <div className='types-legend'>Choose one or more types:</div>
          <div className='types-wrapper flex flex-row flex-wrap justify-start'>
            {formData.types.map((type) => (
              <div className='m-2' key={type}>
                <input
                  type='checkbox'
                  id='types'
                  name={type}
                  value={type}
                  checked={filters.types.includes(type)}
                  onChange={handleChange}
                />
                <label htmlFor={type} className='capitalize'>
                  {type}
                </label>
              </div>
            ))}
          </div>

          <div className='games-legend'>Choose one or more games:</div>
          <div className='games-wrapper flex flex-row flex-wrap justify-start'>
            {formData.games.map((game) => (
              <div className='m-2' key={game}>
                <input
                  type='checkbox'
                  id='games'
                  name={game}
                  value={game}
                  checked={filters.games.includes(game)}
                  onChange={handleChange}
                />
                <label htmlFor={game} className='capitalize'>
                  {game}
                </label>
              </div>
            ))}
          </div>

          <div className='button-wrapper w-full flex content-center justify-center absolute bottom-5 left-0'>
            <button
              type='submit'
              className='submit focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'
            >
              Apply filters
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterModal;
