import Card from "../card/Card";

const Cards = ({ videogames }) => {
  return (
    <div>
      {videogames.map(
        (game, index) => {
          return (
            <Card
              key={index}
              id={game.id}
              name={game.name}
              image={game.image}
              genres={game.genres}
            />
          );
        }
      )}
    </div>
  );
};

export default Cards;
