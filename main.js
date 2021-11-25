
// funcion que pueda contar por cada elemento un numero
 
function cantidadElemento(arr, numero){
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === numero){
            res++;
        } 
    } 
    return res;
}

function buscaNumero(numero){
    let cantidad = 0;
    for (let i = 0; i < datos.length; i++) {
        if(cantidadElemento(datos[i]["resultado"], numero) == 1){
            cantidad++;
        }
    }
    document.write(`la cantidad de ${numero} en los resultados es ${cantidad} <br>`)
}


class menuKino {
    constructor(juego) {
      this.juego = juego; 
    }

    estadistica(){
        if(this.juego == "kino"){
            for (let i = 1; i < 26; i++) {
                buscaNumero(i) 
            }
        }  
    }
  }
 
  const kino = new menuKino("kino");

  kino.estadistica()