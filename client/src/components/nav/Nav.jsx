import SearchBar from "../searchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { paginado } from "../actions/actions";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Nav = ({ onSearch }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nextHandler = (event) => {
    const pageAct = event.target.value;
    dispatch(paginado(pageAct));
  };
  const postGame = () => {
    navigate("./form");
  };

  const pages = [1, 2, 3, 4, 5, 6, 7];

  return (
    <nav className="contenNav">
      <button id="styleButtomNav" onClick={postGame}>
        Crear <br /> Videojuego
      </button>
      <div className="search">
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="contenbtn">
        <ul>
          {pages.map((page) => (
            <li key={page}>
              <button value={page} onClick={nextHandler}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
