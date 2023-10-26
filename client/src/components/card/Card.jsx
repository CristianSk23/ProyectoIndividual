import { Link } from "react-router-dom";

const Card = ({ id, name, image, genres }) => {
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h3>Genres</h3>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <img src={image} alt={name} />
    </div>
  );
};

export default Card;
