import { Link } from 'react-router-dom';
import { Pokemon } from '../types';
import PokeCard from './PokeCard';
import NoPokemonFound from './NoPokemonFound';

const PokeList = ({ pokemon, loading }: { pokemon: Pokemon[]; loading: boolean }) => {
  if (!pokemon.length && !loading) {
    return <NoPokemonFound />;
  }
  return (
    <div
      data-testid='pokemonList'
      className='flex flex-row flex-wrap justify-center px-7 sm:px-20 md:px-30 mt-[9vh] w-full'
    >
      {pokemon.map((poke) => (
        <Link to={`/${poke.name}`} state={poke} key={poke.id}>
          <PokeCard key={poke.id} name={poke.name} id={poke.id} gif_front={poke.gif_front} gif_back={poke.gif_back} />
        </Link>
      ))}
    </div>
  );
};

export default PokeList;
