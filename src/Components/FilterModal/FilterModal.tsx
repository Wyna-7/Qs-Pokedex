import React, { useEffect, useState } from 'react';
import { getPokemonTypes } from '../../Services/ApiClient';

const FilterModal = ({ handleFilterModalClick }) => {
  const [formData, setFormData] = useState({
    types: ['test'],
    games: [],
    regions: [],
    generations: [],
  });
const

  useEffect(() => {
    getPokemonTypes().then((res) => {
      console.log('types', res);
      console.log('types arr', formData.types);
      setFormData((prevFormData) => ({ ...prevFormData, types: res }));
    });
  }, []);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormSelections((prevFormSelections) => ({ ...prevFormSelections, [name]: value }));
  };

  const handleFilterForm = async (event) => {
    event.preventDefault();
  };

  return (
    <div className='filter-modal size-full'>
      <div className='overlay size-full absolute top-0 bg-[rgba(49,49,49,0.8)]' onClick={handleFilterModalClick}></div>
      <div className='form-wrapper'>
        <form
          className='form absolute top-1/4 left-1/4 bg-slate-50 rounded p-5 w-1/2 h-1/2'
          onSubmit={handleFilterForm}
        >
          <div className='types-legend'>Choose one or more types:</div>
          <div className='types-wrapper flex flex-row flex-wrap justify-start'>
            {formData.types.map((type) => (
              <div className='m-2'>
                <input type='checkbox' id={type} name={type} />
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
        </form>
        <button type='submit' className='submit absolute top-3 right-3 p-2' onClick={handleFilterModalClick}>
          Apply filters
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
