import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Cards from "../cards/Cards";
import { PrevPage, getGames, home, paginado } from "../actions/actions";

const Nav = ({ onSearch }) => {
  const dispatch = useDispatch();
  
  const nextHandler = (event) => {
    const pageAct = event.target.value;
    dispatch(paginado(pageAct));
  };

  const getHome = () => {
    dispatch(home());
  };

  return (
    <nav className="contenNav">
      <SearchBar onSearch={onSearch} />
      <button id="styleButtomNav" onClick={getHome}>
        Home
      </button>
      <div> {/* Div contenedor de la lista de btns para paginado */}
        <ul>
          <li>
            <button value={1} onClick={nextHandler}>
              1
            </button>
          </li>
          <li>
            <button value={2} onClick={nextHandler}>
              2
            </button>
          </li>
          <li>
            <button value={3} onClick={nextHandler}>
              3
            </button>
          </li>
          <li>
            <button value={4} onClick={nextHandler}>
              4
            </button>
          </li>
          <li>
            <button value={5} onClick={nextHandler}>
              5
            </button>
          </li>
          <li>
            <button value={6} onClick={nextHandler}>
              6
            </button>
          </li>
          <li>
            <button value={7} onClick={nextHandler}>
              7
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
