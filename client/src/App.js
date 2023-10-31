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
import { getGames, getName } from "./components/actions/actions";

function App() {
  const [bckAllGames, setBckAllVideoGames] = React.useState([]);
  const allGames = useSelector((state) => state.allGames);
  const pagination = useSelector((state) => state.pagination);
  const [page, setPage] = React.useState(0);
   

  console.log("Estado __", allGames);
  console.log("Esto tiene el bckGames ", bckAllGames);

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getGames(pagination));
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
        <Route path="/home" element={<Cards videogames={allGames} />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
