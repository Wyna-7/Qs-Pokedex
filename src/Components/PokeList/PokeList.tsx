import PokeCard from '../PokeCard/PokeCard';
import { Link } from 'react-router-dom';
const PokeList = ({ pokemon }) => {
  return (
    <>
      <div className='flex flex-row flex-wrap justify-center overflow-y-auto px-60 mt-[9vh]'>
        {!pokemon.length ? (
          <div>There are no Pokémon that match this selection.</div>
        ) : (
          pokemon.map((poke) => (
            <Link to={{ pathname: `/${poke.name}` }} state={poke} key={poke.id}>
              <PokeCard
                key={poke.id}
                name={poke.name}
                id={poke.id}
                imgFront={poke.sprites.other.showdown.front_default}
                imgBack={poke.sprites.other.showdown.back_default}
              />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default PokeList;
