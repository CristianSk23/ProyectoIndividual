import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <nav className="contenNav">
      <SearchBar onSearch={onSearch} />
      <Link to="/home">
        <button id="styleButtomNav">Home</button>
      </Link>
    </nav>
  );
};

export default Nav;
