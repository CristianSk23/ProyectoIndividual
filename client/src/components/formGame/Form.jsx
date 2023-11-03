import "./style.css";
import { useState } from "react";

const Form = () => {
  const [gameData, setGameData] = useState({
    name: "",
    description: "",
    date: "",
    rating: 0,
    platforms: [],
    genres: [],
  });
  const handleChange = (event) => {
    setGameData({
      ...gameData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className="contenForm">
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
      <label htmlFor="date">Fecha</label>
      <input
        type="date"
        name="date"
        value={gameData.date}
        onChange={handleChange}
      />
      <hr />
      <label htmlFor="date">Rating</label>
      <input
        type="number"
        name="rating"
        min={1}
        max={5}
        value={gameData.rating}
        onChange={handleChange}
      />
      <div>
      <label>
        <input
          type="checkbox"
          name="Android"
          value="Android"
          onChange={handleChange}
        />
        Android
      </label>
      <br />
      <label>
        <input type="checkbox" name="iOS " value="iOS " />
        iOS 
      </label>
      <br />
      <label>
        <input type="checkbox" name="Pc" value="Pc" />
        PC
      </label>
      <br />
      <label>
        <input type="checkbox" name="PlayStation4" value="PlayStation4" />
        PlayStation 4
      </label>
      <br />
      <label>
        <input type="checkbox" name="PlayStation5" value="PlayStation5" />
        PlayStation 5
      </label>
      <br />
      <label>
        <input type="checkbox" name="Xbox Series X" value="Xbox Series X" /> Xbox Series X
      </label>
      <br />
      <label>
        <input type="checkbox" name="Xbox One" value="Xbox One" /> Xbox One
      </label>
      <br />
      <label>
        <input type="checkbox" name="Nintendo Switch" value="Nintendo Switch" />
        Nintendo Switch
      </label>
      </div>
    </form>
  );
};

export default Form;
