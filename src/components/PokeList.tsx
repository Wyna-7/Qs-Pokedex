import { Pokemon } from '../types';
import PokeCard from './PokeCard';
import { Link } from 'react-router-dom';
import pikachu from '../assets/pikachu-intro.png';
const PokeList = ({ pokemon }: { pokemon: Pokemon[] }) => {
  return (
    <>
      <div className='flex flex-row flex-wrap justify-center px-7 sm:px-20 md:px-30 mt-[9vh] w-full'>
        {!pokemon.length ? (
          <div className='flex flex-col gap-4 justify-center items-center font-bold text-xl'>
            <img src={pikachu} alt='detective pikachu' className='w-[60%]' />
            <span className='text-center'>There are no Pokémon that match this selection.</span>
          </div>
        ) : (
          pokemon.map((poke) => (
            <Link to={{ pathname: `/${poke.name}` }} state={poke} key={poke.id}>
              <PokeCard
                key={poke.id}
                name={poke.name}
                id={poke.id}
                gif_front={poke.gif_front}
                gif_back={poke.gif_back}
              />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default PokeList;
