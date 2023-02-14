//export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}` //llamando lo que esta en el contenedor
  }
  element.addEventListener('click', () => setCounter(counter + 1)) //conversion a numero, funcion flecha.
  setCounter(0)
//}
//
//set_counter(23).subscribe(d => console.log(d)) ANGULAR YA ESTA ESTABLECIDO CON ESTA  FUNCION -JULIEXPLICA
