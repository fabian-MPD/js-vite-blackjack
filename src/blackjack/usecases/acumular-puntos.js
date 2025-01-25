import { valorCarta } from "./";

/**
 * 
 * @param {String} carta carta seleccionada "A" 
 * @param {Number} turno  posicion de de turno de los jugadores
 *  
 * @param {Array} smallJugador que contiene la etiqueta small para agregar puntos 
 * @param {Array} puntosJugadores arreglo con las posiciones de los jugadores
 * @returns {Array} de vuelve un arreglo con los puntos de los jugadores
 */
export const acumularPuntos = (carta, turno, smallJugador, puntosJugadores) =>{

    console.log(puntosJugadores[turno])
   
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        
    smallJugador[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];


}