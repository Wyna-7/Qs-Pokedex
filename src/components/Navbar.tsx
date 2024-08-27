import logo from '../assets/Pokémon_logo.svg';
import { BsFilterCircle } from 'react-icons/bs';
import { NavBarProps } from '../types';

const Navbar = ({ search, setSearch, handleFilterModalClick }: NavBarProps) => {
  return (
    <div
      className='navbar flex absolute justify-around box-border z-10 py-2 h-[9vh] w-[100%] bg-gray-800'
      data-testid='navbar'
    >
      <img className='navbar_logo h-full' src={logo} alt='pokemon logo' data-testid='navbar_logo' />
      <div className='navbar_search h-full flex items-center gap-2'>
        <input
          className='input p-1 pl-2 border-none rounded-md outline-none'
          type='text'
          placeholder='Search Pokémon'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button
          className='filter-icon text-3xl cursor-pointer bg-gray-800 text-white border-none m-2'
          onClick={handleFilterModalClick}
        >
          <BsFilterCircle />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
