const cargarPeliculas = async() =>{
    const respuesta = await fetch ('https://api.themoviedb.org/3/movie/550?api_key=ad8a4e67fcb9d1322a7441d279ca0031');
    console.log(respuesta);
}//variable respuesta es igual a la peticion http
 
cargarPeliculas();

