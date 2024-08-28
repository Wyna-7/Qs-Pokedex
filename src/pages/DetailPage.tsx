import { Link, useLocation } from 'react-router-dom';
import { Pokemon } from '../types';
import { IoArrowBackOutline } from 'react-icons/io5';

const DetailPage = () => {
  const { state } = useLocation();
  const pokemon: Pokemon = state;
  const { name, abilities, stats, types, image } = pokemon;

  const colors: Record<string, string> = {
    normal: 'bg-[#A8A77A]',
    fire: 'bg-[#EE8130]',
    water: 'bg-[#6390F0]',
    electric: 'bg-[#F7D02C]',
    grass: 'bg-[#7AC74C]',
    ice: 'bg-[#96D9D6]',
    fighting: 'bg-[#C22E28]',
    poison: 'bg-[#A33EA1]',
    ground: 'bg-[#E2BF65]',
    flying: 'bg-[#A98FF3]',
    psychic: 'bg-[#F95587]',
    bug: 'bg-[#A6B91A]',
    rock: 'bg-[#B6A136]',
    ghost: 'bg-[#735797]',
    dragon: 'bg-[#6F35FC]',
    dark: 'bg-[#705746]',
    steel: 'bg-[#B7B7CE]',
    fairy: 'bg-[#D685AD]',
  };

  return (
    <div className='pokemon-detail size-full   mb-28 px-2 lg:px-60 pt-5 bg-white overflow-y-auto'>
      <div>
        <Link to={'/'}>
          <button className='flex flex-row justify-center items-center gap-1 text-[#308eec] hover:opacity-80 font-medium  text-lg px-5 py-2.5 me-2 mb-2'>
            <IoArrowBackOutline />
            <span>Back to list</span>
          </button>
        </Link>
      </div>
      <div className='pokemon-display flex flex-col items-center lg:flex-row lg:items-end gap-4 lg:justify-center'>
        <img src={image} alt={`${name} picture`} className='w-[300px] lg:w-[512px]' />
        <div className='data-wrapper flex flex-col place-items-center md:place-items-start'>
          <div className='capitalize text-5xl font-bold mb-4'>{name}</div>
          <div className='types-wrapper flex flex-row gap-4 mb-5'>
            {types.map((type) => {
              return (
                <div
                  className={`capitalize py-1 px-2 ${colors[type]} text-white font-semibold rounded-[8px]`}
                  key={type}
                >
                  {type}
                </div>
              );
            })}
          </div>
          <div className='battle-data flex flex-col sm:flex-row gap-12 '>
            <div className='pokemon-stats border-solid border-2 rounded-[5px] p-4 drop-shadow-lg w-full sm:w-[30%] min-w-[180px] lg:mb-5'>
              <h2 className='font-bold mb-3'>STATS</h2>
              {stats.map((stat) => {
                return (
                  <div className='stat-data flex flex-row leading-7'>
                    <div className='mr-2 capitalize font-semibold'>{stat.name}: </div>
                    <div>{stat.value}</div>
                  </div>
                );
              })}
            </div>
            <div className='pokemon-abilities border-solid border-2 rounded-[5px] p-4 drop-shadow-lg w-full sm:w-[30%] min-w-[180px] mb-5'>
              <h2 className='font-bold mb-3'>ABILITIES</h2>
              {abilities.map((ability) => {
                return <div className='capitalize leading-7'>{ability}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
