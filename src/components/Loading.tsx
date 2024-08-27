import loadingPikachu from '../assets/pixel-art-rolling.gif';

const Loading = () => {
  return (
    <div className='flex flex-col h-[100vh] gap-4 justify-center items-center font-bold text-xl'>
      <img src={loadingPikachu} alt='pikachu running on a pokeball' className='size-40 mb-4' />
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
