import "./style.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postGame } from "../actions/actions";
import React from "react";
import Validation from "./Validation";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = React.useState({});
  const [gameData, setGameData] = useState({
    name: "",
    description: "",
    released: "",
    rating: 0,
    background_image: "",
    platforms: [],
    genres: [],
  });

  useEffect(() => {
    if (
      gameData.name !== "" ||
      gameData.description !== "" ||
      gameData.background_image !== "" ||
      gameData.released !== "" ||
      gameData.platforms.length !== 0
    ) {
      const gameValidate = Validation(gameData);
      setErrors(gameValidate);
    }
  }, [gameData]);

  const handleChange = (event) => {
    //Recibe la info que enviamos por event.target

    const { name, value, checked } = event.target;

    setGameData((data) => {
      if (name === "platforms") {
        if (checked) {
          //* marca el Chek
          return {
            ...data,
            platforms: [...data.platforms, { name: value }],
          };
        } else {
          // Desmarcar la casilla
          const updatedPlatforms = data.platforms.filter(
            (platform) => platform.name !== value
          );
          return {
            ...data,
            platforms: updatedPlatforms,
          };
        }
      } else if (name === "genres") {
        if (checked) {
          //* marca el Chek
          return {
            ...data,
            genres: [...data.genres, { name: value }],
          };
        } else {
          const updatedGenres = data.genres.filter(
            (genre) => genre.name !== value
          );
          return {
            ...data,
            genres: updatedGenres,
          };
        }
      } else {
        return {
          ...data,
          [name]: value,
        };
      }
    });
  };

  const handleSubmit = async (event) => {
    //*Envia la informacion recolectada del form
    event.preventDefault(); //* Evita que la página se reecargue cuando se envía el formulario

    try {
      const gameJSON = JSON.stringify(gameData);
      dispatch(postGame(gameJSON));
      alert("Videojuego creado con exito");
      navigate("/home");
    } catch (error) {}
  };
  const volverBtn = () => {
    navigate("/home");
  };

  const genresList = [
    //* lista de los 19 generos para los chekBox
    "Action",
    "Adventure",
    "RPG",
    "Shooter",
    "Strategy",
    "Puzzle",
    "Arcade",
    "Racing",
    "Sports",
    "Family",
    "Board Games",
    "Educational",
    "Card",
    "Indie",
    "Casual",
    "Platform",
    "Simulation",
    "Music",
    "Fighting",
  ];
  const platformsList = [
    //* Lista de las plataformas para la chekbox de plataforma
    "Android",
    "iOS",
    "Pc",
    "PlayStation 4",
    "PlayStation 5",
    "Xbox Series X",
    "Xbox One",
    "Nintendo Switch",
  ];

  console.log("Sería la cantidad de errores", Object.keys(errors).length > 0);

  return (
    //* Retorna los elementos del formulario para el llenado de informacion
    <form className="contenForm" onSubmit={handleSubmit}>
      <div className="contenFormStyle">
        <div className="contenInput">
          <label htmlFor="name">Nombre</label>
          <div>
            <input
              type="text"
              name="name"
              value={gameData.name}
              onChange={handleChange}
            />
          </div>
        </div>

        {errors.name && <p id="errorText">{errors.name}</p>}

        <div className="contenInput">
          <label htmlFor="description">Descripcion</label>
          <div>
            <input
              type="text"
              name="description"
              value={gameData.description}
              onChange={handleChange}
            />
          </div>
        </div>

        {errors.description && <p id="errorText">{errors.description}</p>}

        <div className="contenInput">
          <label htmlFor="released">Fecha</label>
          <div>
            <input
              type="date"
              name="released"
              value={gameData.released}
              onChange={handleChange}
            />
          </div>
        </div>

        {errors.released && <p id="errorText">{errors.released}</p>}

        <div className="contenInput">
          <label htmlFor="rating">Rating</label>
          <div>
            <input
              type="number"
              name="rating"
              min={1}
              max={5}
              value={gameData.rating}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="contenInput">
          <h2>Ingresa la URL de tu imagen</h2>
          <label htmlFor="background_image"></label>
          <input
            type="text"
            name="background_image"
            value={gameData.background_image}
            onChange={handleChange}
          />
        </div>

        {errors.background_image && (
          <p id="errorText">{errors.background_image}</p>
        )}

        <div>
          <h2>Selecciona las plataformas: </h2>
        </div>
        <div className="contenPlatforms">
          {platformsList.map((platmor) => (
            <label key={platmor}>
              <input
                type="checkbox"
                value={platmor}
                name="platforms"
                onChange={handleChange}
              />
              {platmor}
            </label>
          ))}
        </div>

        {errors.platforms && <p id="errorText">{errors.platforms}</p>}

        <h2>Selecciona los géneros:</h2>
        <div className="contenGenresList">
          {genresList.map((genre) => (
            <label key={genre}>
              <input
                type="checkbox"
                value={genre}
                name="genres"
                onChange={handleChange}
              />
              {genre}
            </label>
          ))}
        </div>
        {errors.genres && <p id="errorText">{errors.genres}</p>}
      </div>

      <button type="submit" disabled={Object.keys(errors).length > 0}>
        Guardar
      </button>
      <button onClick={volverBtn} id="styleBtnHome">
        Volver
      </button>
    </form>
  );
};

export default Form;
