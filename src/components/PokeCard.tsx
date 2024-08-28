import React from 'react';
import { Pokemon } from '../types';

const PokeCard = ({ id, name, gif_front, gif_back }: Partial<Pokemon>) => {
  return (
    <div className='group m-2 p-3 w-[130px] h-[200px] sm:m-2 sm:p-5 sm:flex-col sm:w-[200px] sm:h-[270px] [perspective:1000px] drop-shadow-lg'>
      <div className='pokeCard flex flex-col w-[130px] h-[200px]  sm:w-[200px] sm:h-[270px]  relative justify-around bg-white size-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
        <div className='front flex flex-col p-5 justify-around rounded-2xl absolute inset-0 size-full'>
          <div className='pokeNumber relative text-4xl'>#{id}</div>
          <img className='pokeSprite flex self-center  size-28' src={gif_front} alt='pokemon front sprite' />
          <div className='pokeName text-center capitalize  text-xl'>{name}</div>
        </div>
        <div className='back bg-white flex flex-col p-5 justify-around rounded-2xl absolute inset-0 size-full [transform:rotateY(180deg)] [backface-visibility:hidden]'>
          <div className='pokeNumber relative text-4xl'>#{id}</div>
          <img className='pokeSprite flex self-center  size-28' src={gif_back} alt='pokemon front sprite' />
          <div className='pokeName text-center capitalize  text-xl'>{name}</div>
        </div>
      </div>
    </div>
  );
};
export default PokeCard;
