import Card from "../card/Card";

const Cards = ({ videogames }) => {
  console.log("Deberia llegar el videojuego " + [videogames]);
  return (
    <div>
      {videogames.map(
        (game, index) => {
          console.log("Sería el ID que esta mapeando " + game.id);
          return (
            <Card
              key={index}
              id={game.id}
              name={game.name}
              image={game.image}
              gender={game.gender}
            />
          );
        }
      )}
    </div>
  );
};

export default Cards;
