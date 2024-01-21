import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

const Detail = () => {
  const params = useParams();
  const id = params.id;
  const URL = `http://localhost:3001/videogames/${id}`;
  console.log("deberia ser el ID " + id);
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
  let videogamesPlatforms = Videogame?.platforms;

  if (Array.isArray(Videogame?.genres)) {
    videogamesGenres = videogamesGenres.join(", ");
  }
  if (Array.isArray(Videogame?.platforms)) {
    videogamesPlatforms = videogamesPlatforms.join(", ");
  }

  return (
    <div
      className="detailContainer"
      style={{
        backgroundImage: `url(${Videogame?.image})`,
      }}
    >
      <div className="detailContent">
        <h3>ID: {Videogame?.id}</h3>
        <h2>{Videogame?.name}</h2>
        <div
          className="detailImage"
          style={{
            backgroundImage: `url(${Videogame?.image})`,
          }}
        />
        <p> {videogamesPlatforms}</p>
        <div
          className="detailDescription"
          dangerouslySetInnerHTML={{ __html: Videogame?.description }}
        />
        <p id="styleP">{videogamesGenres}</p>
        <p id="styleP">{Videogame?.released}</p>
        <h4>Rating: {Videogame?.rating}</h4>
        <div className="contenBtnDetail">
          <button type="button" onClick={backFn}>
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
