import React from 'react';
import pikachu from '../assets/pikachu-intro.png';

const NoPokemonFound = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center px-7 sm:px-20 md:px-30 mt-[9vh] w-full'>
      <div className='flex flex-col gap-4 justify-center items-center font-bold text-xl'>
        <img src={pikachu} alt='detective pikachu' className='w-[60%]' />
        <span className='text-center'>There are no Pokémon that match this selection.</span>
      </div>
    </div>
  );
};

export default NoPokemonFound;
