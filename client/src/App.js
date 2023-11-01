import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import InitialPage from "./components/initialPage/InitialPage";
import { useLocation } from "react-router-dom";
import Nav from "./components/nav/Nav";
import axios from "axios";
import Cards from "./components/cards/Cards";
import Detail from "./components/detail/Detail";
import { useDispatch, useSelector } from "react-redux";
import FilterGames from "./components/filter/FilterGames";
import { getGames, getName, paginado } from "./components/actions/actions";

function App() {
  const allGames = useSelector((state) => state.allGames);
  const bckAllGames = useSelector((state) => state.bckAllGames);
  const games = useSelector((state) => state.gamesEdited);
  
  console.log("cantidad de elementos en allGames ", allGames.map(element => element.id));
  console.log("cantidad de elementos en games ", games.map(element => element.id));
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (bckAllGames.length === 0) {
      dispatch(getGames());
    }
  }, [bckAllGames]);


  const onSearch = async (name) => {
    dispatch(getName(name));
  };

  return (
    <div className="App">
      <div id="navStyle">
        {pathname === "/home" && <Nav onSearch={onSearch} />}
      </div>
      <div>{pathname === "/home" && <FilterGames />}</div>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/home" element={<Cards videogames={games} />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
