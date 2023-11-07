const Validation = (gameData) => {
  const errors = {};
  if (gameData.name.length == 0) {
    console.log("Tendria que entrar al IF si no hay elementos", gameData.name);
    errors.name = "Recuerda llenar este campo";
  }
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚ0-9\s]+$/.test(gameData.name) && gameData.name.length > 1) {
    errors.name = "El nombre no debe contener simbolos";
  }
  if (gameData.name.length >= 100) {
    errors.name = "El nombre no puede contener mas de 15 caracteres";
  }
  //* valida la descripcion
  if (gameData.description.length == 0) {
    errors.description = "Recuerda llenar este campo";
  }
  if (gameData.description.length >= 400) {
    errors.description =
      "La descripcion no puede contener mas de 400 caracteres";
  }
  //* Valida la imagen
  if (gameData.background_image.length < 1) {
    errors.background_image = "Recuerda ingresas la URL de la imagen";
  }

  if (gameData.background_image.length < 1 ) {
    errors.background_image = "Recuerda agregar una URL de una imagen válida";
  }

  if (gameData.released.length < 1) {
    errors.released = "Recuerda ingresar una fecha valida";
  }
  if (gameData.platforms.length < 1) {
    errors.platforms =
      "Debes asociar por lo menos una plataforma a tu videojuego";
  }
  if (gameData.genres.length < 1) {
    errors.genres = "Debes asociar por lo menos un genero a tu videojuego";
  }

  return errors;
};

export default Validation;
