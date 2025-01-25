

/**
 * 
 * @param {String} carta Ejemplo "3H" 
 * @returns {number} si en una letra  === A DEVUELVE 11 si no devuleve 10 y extrae el numero del String
 */

export const valorCarta = (carta) =>{

    if(!carta) throw new Error( 'es obligatorio una carta ');
    
    // substring extrae un caracter de un string segun la posicion el primer argumento posicion segundo excluye los que no se toma es este caso el ultimo caracter
    let valor = carta.substring(0 , carta.length -1);
    return (isNaN(valor))? 
           ((valor === 'A') ? 11 : 10) 
           : valor * 1;
}