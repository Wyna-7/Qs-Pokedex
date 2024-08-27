import { Pokemon } from '../types';
import PokeCard from './PokeCard';
import { Link } from 'react-router-dom';
import pikachu from '../assets/pikachu-intro.png';
const PokeList = ({ pokemon, loading }: { pokemon: Pokemon[]; loading: boolean }) => {
  return (
    <>
      <div className='flex flex-row flex-wrap justify-center px-60 mt-[9vh] h-[88vh] w-full'>
        {!pokemon.length && !loading ? (
          <div className='flex flex-col gap-4 justify-center items-center font-bold text-xl'>
            <img src={pikachu} alt='detective pikachu' className='w-[60%]' />
            <span>There are no Pokémon that match this selection.</span>
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
