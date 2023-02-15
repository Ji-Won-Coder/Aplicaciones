let pagina =1;
let peliculas='';
let ultimaPelicula;
//creamos el observador
let observador = new IntersectionObserver((entradas, observador) => {
	console.log(entradas);

	entradas.forEach(entrada => {
		if(entrada.isIntersecting){
			pagina++;
			cargarPeliculas();
		}
        // entradas recorrera cada entrada cuando se carga una pelicula,sumando cada 20 peliculas
	});
}, {
	rootMargin: '0px 0px 200px 0px',
	threshold: 1.0
});


const cargarPeliculas = async() =>{
    
    try {
        const respuesta = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=ad8a4e67fcb9d1322a7441d279ca0031&language=es-COL&page=${pagina}`); //alt + < + z ->salto para url
        console.log(respuesta);


        //si la respuesta es correcta
        if (respuesta.status === 200 ){
             //acceder a los datos
             const datos= await respuesta.json();
            
            
             datos.results.forEach(pelicula => {
                peliculas += `
                    <div class="pelicula">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                       
                        <h3 class="titulo">${pelicula.title}</h3>
                    </div>`;
                    //esto mas mostrar las imagenes de los posters de cada pelicula
        
             });
             document.getElementById('contenedor').innerHTML = peliculas;

             if(pagina < 1000){
				if(ultimaPelicula){
					observador.unobserve(ultimaPelicula);
				}
	
				const peliculasEnPantalla = document.querySelectorAll('.contenedor .pelicula');
				ultimaPelicula = peliculasEnPantalla[peliculasEnPantalla.length - 1];
				observador.observe(ultimaPelicula);
			}


        }else if (respuesta.status === 401){
            console.log('Error la clave ######### no es la correcta ')
        }else if(respuesta.status === 404){
            console.log('No se encontro la pelicula')
        }else{
            console.log ('NO ENTENDER QUE')
        }


    }catch (error){ //muestre en caso de que haya un error de ejecucion con la peticion
        console.log(error);
    }
    
    
}//variable respuesta es igual a la peticion http
 
cargarPeliculas();

