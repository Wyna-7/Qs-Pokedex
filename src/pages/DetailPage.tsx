import { Link, useLocation } from 'react-router-dom';
import { Pokemon } from '../types';
import { IoArrowBackOutline } from 'react-icons/io5';

const DetailPage = () => {
  const { state } = useLocation();
  const pokemon: Pokemon = state;
  const { name, abilities, stats, types, image } = pokemon;

  return (
    <div className='pokemo-detail size-full  m-0 px-60 pt-5 bg-white'>
      <div className='searched-pokemon_header'>
        <Link to={'/'}>
          <button className='flex flex-row justify-center items-center gap-1 text-[#308eec] hover:opacity-80 font-medium  text-lg px-5 py-2.5 me-2 mb-2'>
            <IoArrowBackOutline />
            <span>Back to list</span>
          </button>
        </Link>
        <div className='pokemon-display flex flex-row items-center gap-4'>
          <div className='img-wrapper w-1/2'>
            <img src={image} alt={`${name} picture`} />
          </div>
          <div className='data-wrapper w-1/2'>
            <div className='capitalize text-5xl font-bold mb-4'>{name}</div>
            <div className='types-wrapper flex flex-row gap-4 mb-5'>
              {types.map((type) => {
                return (
                  <div className='capitalize py-1 px-2 bg-green-600 text-white font-semibold rounded-[8px]' key={type}>
                    {type}
                  </div>
                );
              })}
            </div>
            <div className='battle-data flex flex-row gap-12 '>
              <div className='pokemon-stats border-solid border-2 rounded-[5px] p-4 drop-shadow-lg w-[30%]'>
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
              <div className='pokemon-abilities border-solid border-2 rounded-[5px] p-4 drop-shadow-lg w-[30%]'>
                <h2 className='font-bold mb-3'>ABILITIES</h2>
                {abilities.map((ability) => {
                  return <div className='capitalize leading-7'>{ability}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//poke.sprites.other.home.front-default
export default DetailPage;
