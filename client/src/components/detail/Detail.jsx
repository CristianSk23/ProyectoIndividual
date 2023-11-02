import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./style.css";

const Detail = () => {
  const params = useParams();
  const id = params.id;
  const URL = `http://localhost:3001/videogames/${id}`;
  console.log("deberia ser el ID " + id);

  const [Videogame, setVideogame] = React.useState();

  React.useState(() => {
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

  
  let  videogamesGenres = Videogame?.genres;
  if (Array.isArray(videogamesGenres)) {
    videogamesGenres = videogamesGenres.join(", ");
  }
  console.log(videogamesGenres);


  return (
    <div
      className="detail-container"
      style={{
        backgroundImage: `url(${Videogame?.image})`,
      }}
    >
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
