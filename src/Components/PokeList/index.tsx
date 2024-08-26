import PokeCard from '../PokeCard';

const PokeList = ({ pokemon, searchedPokemon, search }) => {
  return (
    <>
      <div className='grid grid-cols-5 grid-rows-5 mx-60 pt-[12vh]'>
        {!pokemon.length ? (
          <div>There are no Pokémon that match this selection.</div>
        ) : (
          pokemon.map((poke) => (
            <PokeCard key={poke.id} name={poke.name} id={poke.id} img={poke.sprites.front_default} />
          ))
        )}
      </div>
    </>
  );
};

export default PokeList;
