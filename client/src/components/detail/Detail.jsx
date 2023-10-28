import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const id = params.id;
  console.log("deberia ser el ID " + id);

  const [Videogame, setVideogame] = React.useState();

  React.useState(() =>{
    
  })
};

export default Detail;
