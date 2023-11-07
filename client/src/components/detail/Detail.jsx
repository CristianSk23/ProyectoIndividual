import React from "react";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./style.css";
import { useDispatch } from "react-redux";
import { home } from "../actions/actions";

const Detail = () => {
  const params = useParams();
  const id = params.id;
  const URL = `http://localhost:3001/videogames/${id}`;
  console.log("deberia ser el ID " + id);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [Videogame, setVideogame] = React.useState();

  React.useEffect(() => {
    axios(URL)
      .then(({ data }) => {
        if (data.name) {
          setVideogame(data);
        }
      })
      .catch(() => {
        console.log("BREAK");
      });
    return setVideogame({});
  }, [params?.id]);

  const backFn = () => {
    navigate("/home");
  };

  console.log("Este sería el videojuego que se escogió ", { Videogame });

  let videogamesGenres = Videogame?.genres;
  if (Array.isArray(Videogame?.genres)) {
    videogamesGenres = videogamesGenres.join(", ");
  }

  return (
    <div
      className="detail-container"
      style={{
        backgroundImage: `url(${Videogame?.image})`,
      }}
    >
      <button type="button" onClick={backFn}>
        Regresar
      </button>
      <div className="detail-content">
        <h2>ID: {Videogame?.id}</h2>
        <h2>{Videogame?.name}</h2>
        <div
          className="detail-image"
          style={{
            backgroundImage: `url(${Videogame?.image})`,
          }}
        />
        <p> {Videogame?.platforms}</p>
         <div
          className="detail-description"
          dangerouslySetInnerHTML={{ __html: Videogame?.description }}
        />
        <p>Generos: {videogamesGenres}</p>
        <p>Fecha de lanzamiento: {Videogame?.released}</p>
        <h2>Rating: {Videogame?.rating}</h2>
      </div>
    </div>
  );
};

export default Detail;
