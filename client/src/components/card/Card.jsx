import { Link } from "react-router-dom";
import "./style.css";
const Card = ({ id, name, image, genres, rating }) => {
  return (
    <div className="contentStyle">
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h3>Genres</h3>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <img className="imgGame" src={image} alt={name} />
      <p>RATING: {rating}</p>
    </div>
  );
};

export default Card;
