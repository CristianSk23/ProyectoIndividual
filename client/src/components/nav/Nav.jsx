import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Cards from "../cards/Cards";
import { getGames, nextPage } from "../actions/actions";

const Nav = ({ onSearch }) => {
  const pagination = useSelector((state) => state.pagination);
  const dispatch = useDispatch();
  const nextHandler = () => {
    dispatch(nextPage());
    dispatch(getGames(pagination));
  };
  const prevHandler = () => {
    console.log("Cambiaria de página Prev");
  };

  return (
    <nav className="contenNav">
      <SearchBar onSearch={onSearch} />
      <Link to="/home">
        <button id="styleButtomNav">Home</button>
      </Link>
      <button id="styleButtomNav" onClick={prevHandler}>
        Prev
      </button>
      <button id="styleButtomNav" onClick={nextHandler}>
        Next
      </button>
    </nav>
  );
};

export default Nav;
