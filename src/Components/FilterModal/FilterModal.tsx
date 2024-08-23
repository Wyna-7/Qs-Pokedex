import React, { useState } from 'react'

const FilterModal = ({handleFilterModalClick}) => {
  const [filterFormData, setFilterFormData] = useState({
    types: [],
    games: [],
    regions: [],
    generations: []
  })

  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className='filter-modal size-full'>
      <div className="overlay size-full absolute top-0 bg-[rgba(49,49,49,0.8)]" onClick={handleFilterModalClick}></div>
      <div className='form-wrapper'>
        <form className='form absolute top-1/4 left-1/4 bg-slate-50 rounded p-5 w-1/2 h-1/2'>
            <div className='types-legend'>Choose one or more types:</div>
            {/* <div>
              <input type="checkbox" id={type} name={type} />
            </div> */}
        </form>
        <button className='close-modal absolute top-3 right-3 p-2' onClick={handleFilterModalClick}>Close</button>
      </div>
    </div>
  )
}

export default FilterModal
