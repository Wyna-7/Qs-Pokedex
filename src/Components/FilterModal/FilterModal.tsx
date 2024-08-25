import { useEffect, useState } from 'react';
import { getPokemonTypes } from '../../Services/ApiClient';

const FilterModal = ({ handleFilterModalClick, selectedFilters, setSelectedFilters }) => {
  const [formData, setFormData] = useState({
    types: [],
    // games: [],
    // regions: [],
    // generations: [],
  });

  useEffect(() => {
    getPokemonTypes().then((res) => {
      setFormData((prevFormData) => ({ ...prevFormData, types: res }));
    });
  }, []);

  const handleChange = (event) => {
    let { name, id, checked } = event.target;
    if (checked) {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        [id]: [...prevFilters[id], name],
      }));
    } else {
      setSelectedFilters((prevFilters) => {
        const updatedTypes = prevFilters.types.filter((item) => item !== name);
        return {
          ...prevFilters,
          types: updatedTypes,
        };
      });
    }
  };

  return (
    <div className='filter-modal size-full'>
      <div className='overlay size-full absolute top-0 bg-[rgba(49,49,49,0.8)]' onClick={handleFilterModalClick}></div>
      <div className='form-wrapper'>
        <form className='form absolute top-1/4 left-1/4 bg-slate-50 rounded p-5 w-1/2 h-1/2'>
          <div className='types-legend'>Choose one or more types:</div>
          <div className='types-wrapper flex flex-row flex-wrap justify-start'>
            {formData.types.map((type) => (
              <div className='m-2' key={type}>
                <input type='checkbox' id='types' name={type} onChange={(e) => handleChange(e)} />
                <label htmlFor={type} className='capitalize'>
                  {type}
                </label>
              </div>
            ))}
          </div>
          {/* <div className='games-legend'>Choose one or more games:</div>
          {formData.games.map((game) => (
            <div>
              <input type='checkbox' id={game} name={game} />
              <label htmlFor={game}>{game}</label>
            </div>
          ))} */}
          <div className='button-wrapper w-full flex content-center justify-center absolute bottom-5 left-0'>
            <button
              type='submit'
              className='submit focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'
              onClick={handleFilterModalClick}
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
