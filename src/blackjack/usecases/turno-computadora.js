import { pedirCrata, acumularPuntos, aletras, crearCarta } from "./";


export const turnoComputadora = (puntosMinimos,baraja,puntosJugadores, smallJugador,divCartasJugadores)=>{


      let puntosComputadora = 0
  
      do{
          const carta = pedirCrata(baraja);
        
          puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, smallJugador,puntosJugadores)
          crearCarta(carta, puntosJugadores.length-1,divCartasJugadores)


          
          
  
      }while((puntosComputadora < puntosMinimos) && (puntosMinimos<= 21)){
  
          setTimeout(()=>{
  
              aletras(puntosComputadora,puntosMinimos);
              
          }, 100 );
          
          
      }
      
  }
  

  