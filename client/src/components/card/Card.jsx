import { Link } from "react-router-dom";
import "./style.css";
import { useState, useEffect } from "react";

const Card = ({ id, name, image, genres, rating }) => {
  const [animate, setAnimate] = useState(false);
  console.log("Estado de carga de las card", animate);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      className="contentStyle"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="contenGeneralInfoCard">
        <h2>{name}</h2>

        <div className="contenInfoCard">
          <ul>
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <p>RATING: {rating}</p>
          <Link to={`/detail/${id}`}>
            <button>More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
