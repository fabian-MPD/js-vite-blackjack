import {} from "./";

export const aletras = (puntosComputadora, puntosJugador)=>{
  
    return (puntosComputadora === puntosJugador) ? alert('nadie gana, empate'):
           (puntosComputadora === 21)? alert('gana computadora'):
           (puntosComputadora > 21)? alert('pierde computadora, ganas jugador'):
           (puntosComputadora > puntosJugador && puntosJugador < 21 && puntosComputadora < 21)? alert('computadora gana'):
           (puntosJugador > 21)? alert('gana computadora'): alert('gana jugador');
     
 }