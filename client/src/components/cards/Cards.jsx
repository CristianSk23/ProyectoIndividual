import Card from "../card/Card";
const Cards = ({ videogames }) => {
  return (
    <div>
      {videogames.map((game, index) => {
        if (index < 15) {
          return (
            <Card
              key={index}
              id={game.id}
              name={game.name}
              image={game.image}
              genres={game.genres}
              rating={game.rating}
            />
          );
        }
      })}
    </div>
  );
};

export default Cards;
