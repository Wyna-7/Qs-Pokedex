import './style.css';
const PokeCard = ({ id, name, img }) => {
  return (
    <div className='pokeCard bg-yellow-300 size-fit min-w-[204px] min-h-[290px] m-2 p-5 rounded-2xl '>
      <div className='pokeNumber relative z-0 text-5xl'>#{id}</div>
      <img className='pokeSprite  z-1' src={img} alt='pokemon front sprite' />
      <div className='pokeName capitalize z-2 text-xl'>{name}</div>
    </div>
  );
};
export default PokeCard;
