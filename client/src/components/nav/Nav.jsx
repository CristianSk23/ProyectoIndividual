import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Cards from "../cards/Cards";

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
