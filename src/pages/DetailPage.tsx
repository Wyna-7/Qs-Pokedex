import { Link, useLocation } from 'react-router-dom';

const DetailPage = () => {
  const { state } = useLocation();
  const { name, abilities, stats, types, sprites } = state;
  console.log(state);

  return (
    <div className='pokemo-detail size-full  m-0 p-0 bg-red-800'>
      <div className='searched-pokemon_header'>
        <Link to={'/'}>
          <button className='focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'>
            Back
          </button>
        </Link>
        <div className='pokemon-display flex flex-row'>
          <div className='img-wrapper'>
            <img src={sprites.other.home.front_default} alt={`${name} picture`} />
          </div>
          <div className='data-wrapper'>
            <div className='capitalize text-5xl'>{name}</div>
            <div className='types-wrapper flex flex-row justify-around'>
              {types.map((type) => {
                return (
                  <div className='capitalize' key={type.type.name}>
                    {type.type.name}
                  </div>
                );
              })}
            </div>
            <div className='battle-data flex flex-row justify-between'>
              <div className='pokemon-stats'>
                <div>STATS</div>
                {stats.map((stat) => {
                  return (
                    <div className='stat-data flex flex-row'>
                      <div className='mr-2'>{stat.stat.name}</div>
                      <div>{stat.base_stat}</div>
                    </div>
                  );
                })}
              </div>
              <div className='pokemon-abilities'>
                <div>ABILITIES</div>
                {abilities.map((ability) => {
                  return <div>{ability.ability.name}</div>;
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
