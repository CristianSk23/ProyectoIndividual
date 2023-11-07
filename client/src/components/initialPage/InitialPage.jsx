import { Link } from "react-router-dom";
import "./style.css";

const initialPage = () => {
  return (
    <div className="initialContent">
      <div className="contenInfo">
        <h1>BIENVENIDOS</h1>
        <h2>¡tu viaje en el mundo de los videojuegos comienza aquí!</h2>
        <Link to={"/home"}>
          <button id="styleBtnInitial">Iniciar</button>
        </Link>
      </div>
    </div>
  );
};

export default initialPage;
