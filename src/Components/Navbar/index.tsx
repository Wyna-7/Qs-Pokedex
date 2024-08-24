import logo from '../../assets/Pokémon_logo.svg';
import { BsFilterCircle } from "react-icons/bs";

const Navbar = ({search, setSearch, handleFilterModalClick}) => {


  return (
  <div className="navbar flex absolute justify-around box-border z-10 h-[9vh] w-[100vw] bg-black" data-testid="navbar">
    <img className="navbar_logo h-full" src={logo} alt="pokemon logo" data-testid="navbar_logo"/>
    <div className="navbar_search h-full flex items-center">
      <input className="input p-1" type="text" placeholder='Search Pokémon' value={search} onChange={(event) => setSearch(event.target.value)} />
      <button className="filter-icon text-3xl cursor-pointer bg-black text-white border-none m-2" onClick={handleFilterModalClick}>
        <BsFilterCircle />
        </button>
        
    </div>
  </div>
  )
}

export default Navbar;