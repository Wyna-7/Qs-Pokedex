import logo from '../assets/Pokémon_logo.svg';
import { BsFilterCircle } from 'react-icons/bs';
import { NavBarProps } from '../types';

const Navbar = ({ search, setSearch, handleFilterModalClick }: NavBarProps) => {
  return (
    <div
      className='navbar flex absolute justify-between items-center box-border z-10 py-2 px-7 sm:px-20 md:px-30 gap-3 min-h-[60px] h-[9vh] w-[100%] bg-gray-800'
      data-testid='navbar'
    >
      <img className='navbar_logo h-[80%] pl-[4%]' src={logo} alt='pokemon logo' data-testid='navbar_logo' />
      <div className='navbar_search h-full flex items-center justify-center gap-3'>
        <input
          className='input h-[50%] w-[700%] p-1 pl-2 border-none rounded-md outline-none'
          type='text'
          placeholder='Search Pokémon'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button
          className='filter-icon text-3xl cursor-pointer bg-gray-800 text-white border-none m-1'
          onClick={handleFilterModalClick}
        >
          <BsFilterCircle />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
