import { Link, useLocation } from "react-router-dom";

const initialPage = () => {
  return (
    <div>
      <h1>BIENVENIDOS</h1>
      <h2>¡tu viaje en el mundo de los videojuegos comienza aquí!</h2>
      <Link to={"/home"}>
        <button id="styleBtnInitial">Iniciar</button>
      </Link>
    </div>
  );
};

export default initialPage;
