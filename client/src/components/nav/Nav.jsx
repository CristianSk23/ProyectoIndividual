import SearchBar from "../searchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { home, paginado } from "../actions/actions";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Nav = ({ onSearch }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nextHandler = (event) => {
    const pageAct = event.target.value;
    dispatch(paginado(pageAct));
  };

  const getHome = () => {
    dispatch(home());
  };
  const postGame = () => {
    navigate("./form")
  };


  return (
    <nav className="contenNav">
      <SearchBar onSearch={onSearch} />
      <button id="styleButtomNav" onClick={getHome}>
        Home
      </button>
      <button id="styleButtomNav" onClick={postGame}>
        Crear <br/> Videojuego
      </button>
      <div>
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
