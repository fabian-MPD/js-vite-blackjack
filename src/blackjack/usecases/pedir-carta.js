

/**
 * PEDIR UNA CARTA O EXTRAE CARTA DE BARAJA
 * @param {Array <String>} baraja  EJemplo baraja ['8H', '7D', 'AD', 'QC', '3H'] 
 * @returns {String}Retorna el ultimo  String del arreglo de  barajas Ejemplo  "3H" 
 */

export const pedirCrata = (baraja) =>{

  
    if(!baraja || baraja.length === 0){
        // lo que hace es que cuando se termine la baraja no deja seguir el juego
        throw 'no hay mas cartas'
    }
  

    return baraja.pop();
}