let pagina =1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

//cuando la variable-pagina es menor de 1000 entonces, suma 1 cada cuento
btnSiguiente.addEventListener ('click', () => {
    if (pagina < 1000){
        pagina += 1;
        cargarPeliculas();
    }

});
//cuando la variable pagina sea mayor a 1000 entonces le resta el conteo.
btnAnterior.addEventListener ('click', () => {
    if (pagina > 1){
        pagina -= 1;
        cargarPeliculas();
    }

});

const cargarPeliculas = async() =>{
    
    try {
        const respuesta = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=ad8a4e67fcb9d1322a7441d279ca0031&language=es-COL&page=${pagina}`); //alt + < + z ->salto para url
        console.log(respuesta);


        //si la respuesta es correcta
        if (respuesta.status === 200 ){
             //acceder a los datos
             const datos= await respuesta.json();
            
             let peliculas = ''; 
             datos.results.forEach(pelicula => {
                peliculas += `
                    <div class="pelicula">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                       
                        <h3 class="titulo">${pelicula.title}</h3>
                    </div>`;
                    //esto mas mostrar las imagenes de los posters de cada pelicula
        
             });
             document.getElementById('contenedor').innerHTML = peliculas;



        }else if (respuesta.status === 401){
            console.log('Error la clave ######### no es la correcta ')
        }else if(respuesta.status === 404){
            console.log('No se encontro la pelicula')
        }else{
            console.log ('OH NO!!!! que sucedio?')
        }


    }catch (error){ //muestre en caso de que haya un error de ejecucion con la peticion
        console.log(error);
    }
    
    
}//variable respuesta es igual a la peticion http
 
cargarPeliculas();

