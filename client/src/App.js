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
import { getGames } from "./components/actions/actions";

function App() {
  const [allVideoGames, setAllVideoGames] = React.useState([]); //* Estado global
  const [bckAllGames, setBckAllVideoGames] = React.useState([]);
  const allAuxGames  = useSelector((state) => state.allGames);

  console.log("Estado __" , allAuxGames);

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (bckAllGames.length === 0) {
      dispatch(getGames());
    }

  }, [bckAllGames]);
  const onSearch = async (name) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/videogames/name/?name=${name}`
      );

      if (data) {
        setAllVideoGames(data);
      }
    } catch (error) {
      throw Error(error.message);
    }
  };

  const fetchVideoGames = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/videogames/`);
      setAllVideoGames(data);
    } catch (error) {
      console.error("Error al cargar videojuegos", error);
    }
  };

  return (
    <div className="App">
      <div id="navStyle">
        {pathname === "/home" && <Nav onSearch={onSearch} />}
      </div>
      <div>{pathname === "/home" && <FilterGames />}</div>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/home" element={<Cards videogames={allAuxGames} />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
