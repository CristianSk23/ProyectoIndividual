import { useState } from "react";
import "./style.css"

const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSearch = () => {
    onSearch(name); // Llama a la función onSearch con el valor actual del campo de búsqueda
  };
  return (
    <div id="contenSearchBar">
      <input type="search" value={name} onChange={handleChange} />
      <button onClick={() => handleSearch()}>Buscar</button>
    </div>
  );
};
export default SearchBar;
