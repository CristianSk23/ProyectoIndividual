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
import { getGames, getName, paginado } from "./components/actions/actions";

function App() {
  const allGames = useSelector((state) => state.allGames);
  const bckAllGames = useSelector((state) => state.bckAllGames);
  const games = useSelector((state) => state.gamesEdited);
  const stateBTN = useSelector((state) => state.btnBD);

  console.log("Estado del btn ", stateBTN);

  console.log(
    "cantidad de elementos en allGames ",
    allGames.map((element) => element.id)
  );
  console.log(
    "cantidad de elementos en games ",
    games.map((element) => element.id)
  );
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (bckAllGames.length === 0) {
      dispatch(getGames());
    }
  }, [bckAllGames, stateBTN]);

  const onSearch = async (name) => {
    dispatch(getName(name));
  };

  return (
    <div className="App">
      <div id="navStyle">
        {pathname === "/home" && <Nav onSearch={onSearch} />}
      </div>
      <div>{pathname === "/home" && <FilterGames stateBTN={stateBTN} />}</div>
      <div className="contenPage">
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route
            path="/home"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Cards videogames={games} />
              </Suspense>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Suspense fallback={<h1 color="red">Loading...</h1>}>
                <Detail />
              </Suspense>
            }
          />
          <Route
            path="/form"
            element={
              <Suspense fallback={<h1 color="white">Loading...</h1>}>
                <Form />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
