import { Link } from "react-router-dom";

const Card = ({ id, name, image, genres }) => {
  console.log("Deberia llegar los ID de los videojuegos " + id);
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h3> Genres:{genres}</h3>
      <img src={image} alt={name} />
    </div>
  );
};

export default Card;
