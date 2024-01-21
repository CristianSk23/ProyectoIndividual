import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import InitialPage from "./components/initialPage/InitialPage";
import { useLocation } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Cards from "./components/cards/Cards";
import Detail from "./components/detail/Detail";
import Form from "./components/formGame/Form";
import { useDispatch, useSelector } from "react-redux";
import FilterGames from "./components/filter/FilterGames";
import { getGames, getName, getGenres } from "./components/actions/actions";

function App() {
  const allGames = useSelector((state) => state.allGames);
  const bckAllGames = useSelector((state) => state.bckAllGames);
  const games = useSelector((state) => state.gamesEdited);
  const stateBTN = useSelector((state) => state.btnBD);
 
/* 
  console.log("Estado del btn ", stateBTN);

  console.log(
    "cantidad de elementos en allGames ",
    allGames.map((element) => element.id)
  );
  console.log(
    "cantidad de elementos en games ",
    games.map((element) => element.id)
  ); */
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (bckAllGames.length === 0) {
      dispatch(getGames());
      dispatch(getGenres());
    }
  }, [bckAllGames, stateBTN]);

  const onSearch = async (name) => {
    dispatch(getName(name));
  };

  return (
    <div className="App">
      <h1>Henry Videogames</h1>
    </div>
  );
}

export default App;
