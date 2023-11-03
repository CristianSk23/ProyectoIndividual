import "./style.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postGame } from "../actions/actions";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [gameData, setGameData] = useState({
    name: "",
    description: "",
    released: "",
    rating: 0,
    background_image: "",
    platforms: [],
    genres: [],
  });
  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    setGameData((data) => {
      if (name === "platforms") {
        if (checked) {
          // Marcar la casilla
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
          // Marcar la casilla
          return {
            ...data,
            genres: [...data.genres, { name: value }],
          };
        } else {
          // Desmarcar la casilla
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
    event.preventDefault();

    try {
      const gameJSON = JSON.stringify(gameData);
      console.log("Este sería el videojuego creado", gameJSON);
      dispatch(postGame(gameJSON));
      // Restablece el formulario
    } catch (error) {
      console.error("Error al enviar los datos del formulario:", error);
    }
  };

  console.log("Así va el estado del nuevo videojuego ", gameData);

  const genresList = [
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
    "Android",
    "iOS",
    "Pc",
    "PlayStation 4",
    "PlayStation 5",
    "Xbox Series X",
    "Xbox One",
    "Nintendo Switch",
  ];

  return (
    <form className="contenForm" onSubmit={handleSubmit}>
      <div></div>
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        name="name"
        value={gameData.name}
        onChange={handleChange}
      />
      <hr />
      <label htmlFor="description">Descripcion</label>
      <input
        type="text"
        name="description"
        value={gameData.description}
        onChange={handleChange}
      />
      <hr />
      <label htmlFor="released">Fecha</label>
      <input
        type="date"
        name="released"
        value={gameData.released}
        onChange={handleChange}
      />
      <hr />
      <label htmlFor="rating">Rating</label>
      <input
        type="number"
        name="rating"
        min={1}
        max={5}
        value={gameData.rating}
        onChange={handleChange}
      />

      <div>
        <h2>Ingresa la URL de tu imagen</h2>
        <label htmlFor="background_image">Image</label>
        <input
          type="text"
          name="background_image"
          value={gameData.background_image}
          onChange={handleChange}
        />
      </div>

      <div>
        <h2>Selecciona las plataformas: </h2>
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

      <div>
        <h2>Selecciona los géneros:</h2>
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
        <button type="submit">Guardar</button>
      </div>
    </form>
  );
};

export default Form;

/* 

   <div>
        {" "}
        //* Div que contiene los checkbox de las plataformas
        <label>
          <input
            type="checkbox"
            name="platforms"
            value="Android"
            onChange={handleChange}
          />
          Android
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="platforms"
            value="iOS"
            onChange={handleChange}
          />
          iOS
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="platforms"
            value="Pc"
            onChange={handleChange}
          />
          PC
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="platforms"
            value="PlayStation4"
            onChange={handleChange}
          />
          PlayStation 4
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="platforms"
            value="PlayStation 5"
            onChange={handleChange}
          />
          PlayStation 5
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="platforms"
            value="Xbox Series X"
            onChange={handleChange}
          />{" "}
          Xbox Series X
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="platforms"
            value="Xbox One"
            onChange={handleChange}
          />{" "}
          Xbox One
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="platforms"
            value="Nintendo Switch"
            onChange={handleChange}
          />
          Nintendo Switch
        </label>
      </div>

 */
