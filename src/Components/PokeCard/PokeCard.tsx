const PokeCard = ({ id, name, imgFront, imgBack }) => {
  return (
    <div className='group m-2 p-5 w-[200px] h-[270px] [perspective:1000px]'>
      <div className='pokeCard flex flex-col w-[200px] h-[270px] relative text-black justify-around bg-yellow-300 size-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
        <div className='front flex flex-col  p-5 text-black justify-around rounded-2xl absolute inset-0 size-full'>
          <div className='pokeNumber relative text-4xl'>#{id}</div>
          <img className='pokeSprite flex self-center  size-28' src={imgFront} alt='pokemon front sprite' />
          <div className='pokeName text-center capitalize  text-xl'>{name}</div>
        </div>
        <div className='back  bg-yellow-300 flex flex-col p-5 text-black justify-around rounded-2xl absolute inset-0 size-full [transform:rotateY(180deg)] [backface-visibility:hidden]'>
          <div className='pokeNumber relative text-4xl'>#{id}</div>
          <img className='pokeSprite flex self-center  size-28' src={imgBack} alt='pokemon front sprite' />
          <div className='pokeName text-center capitalize  text-xl'>{name}</div>
        </div>
      </div>
    </div>
  );
};
export default PokeCard;
