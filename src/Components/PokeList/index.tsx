import PokeCard from '../PokeCard';

const PokeList = ({ pokemon, searchedPokemon, search }) => {
  console.log('pokemon in list', pokemon);
  return (
    <>
      <div className='grid grid-cols-5 grid-rows-5 mx-60 pt-[12vh]'>
        {search === ''
          ? pokemon.map((poke) => (
              <PokeCard key={poke.id} name={poke.name} id={poke.id} img={poke.sprites.front_default} />
            ))
          : searchedPokemon.map((poke) => (
              <PokeCard key={poke.id} name={poke.name} id={poke.id} img={poke.sprites.front_default} />
            ))}
      </div>
    </>
  );
};

export default PokeList;
