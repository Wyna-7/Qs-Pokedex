import { useEffect, useState } from 'react';
import { getPokemonTypes, getPokemonGames } from '../services/ApiClient';
import { FilterModalProps, Filters } from '../types';

const FilterModal = ({ closeModal, selectedFilters, setSelectedFilters }: FilterModalProps) => {
  const [formData, setFormData] = useState<Filters>({
    types: [],
    games: [],
  });
  const [filters, setFilters] = useState<Filters>({
    types: [],
    games: [],
  });

  useEffect(() => {
    getPokemonTypes().then((res) => {
      setFormData((prevFormData) => ({ ...prevFormData, types: res || [] }));
    });
    getPokemonGames().then((res) => {
      setFormData((prevFormData) => ({ ...prevFormData, games: res || [] }));
    });
    setFilters(selectedFilters);
  }, [selectedFilters]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, id, checked } = event.target;
    if (checked) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [id]: [...prevFilters[id as keyof Filters], name],
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSelectedFilters(filters);
    closeModal();
  };

  return (
    <div className='filter-modal flex fixed z-100 w-[100vw] h-[100vh]'>
      <div className='overlay size-full absolute top-0 bg-[rgba(49,49,49,0.8)]' onClick={closeModal}></div>
      <div className='form-wrapper'>
        <form className='form absolute top-1/4 left-1/4 bg-slate-50 rounded p-5 w-1/2' onSubmit={handleSubmit}>
          <h2 className='types-legend font-bold mb-1'>Choose one or more types:</h2>
          <div className='types-wrapper flex flex-row flex-wrap justify-start'>
            {formData.types.map((type) => (
              <div className='flex m-2' key={type}>
                <input
                  type='checkbox'
                  id='types'
                  name={type}
                  value={type}
                  checked={filters.types.includes(type)}
                  onChange={handleChange}
                />
                <label htmlFor={type} className='capitalize ml-1'>
                  {type}
                </label>
              </div>
            ))}
          </div>

          <h2 className='games-legend font-bold mt-4 mb-1'>Choose one or more games:</h2>
          <div className='games-wrapper flex flex-row flex-wrap justify-start'>
            {formData.games.map((game) => (
              <div className='flex m-2' key={game}>
                <input
                  type='checkbox'
                  id='games'
                  name={game}
                  value={game}
                  checked={filters.games.includes(game)}
                  onChange={handleChange}
                />
                <label htmlFor={game} className='capitalize ml-1'>
                  {game}
                </label>
              </div>
            ))}
          </div>

          <div className='button-wrapper w-full flex content-center justify-center mt-5'>
            <button
              type='submit'
              className='submit focus:outline-none text-white bg-gray-800 hover:bg-gray-700 focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-gray-400'
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
