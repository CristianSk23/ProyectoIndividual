import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import InitialPage from "./components/initialPage/InitialPage";
import { useLocation } from "react-router-dom";
import Nav from "./components/nav/Nav";
import axios from "axios";
import Cards from "./components/cards/Cards";

function App() {
  const [videogames, setVideogames] = React.useState([]);
  const { pathname } = useLocation();

  React.useEffect(() => {
    const fetchVideoGames = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/videogames/`);
        setVideogames(data);
      } catch (error) {
        console.error("Error al cargar videojuegos", error);
      }
    };
    if (pathname === "/home") {
      fetchVideoGames();
    }
  }, [pathname]);

  const onSearch = async (name) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/videogames/name/?name=${name}`
      );

      if (data) {
        setVideogames(data);
      }
    } catch (error) {}
  };

  return (
    <div className="App">
      <div id="navStyle">{pathname !== "/" && <Nav onSearch={onSearch} />}</div>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/home" element={<Cards videogames={videogames} />} />
      </Routes>
    </div>
  );
}

export default App;
