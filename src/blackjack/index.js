import _ from  'underscore'
import {cartasbaraja,pedirCrata,valorCarta, acumularPuntos, turnoComputadora,crearCarta} from "./usecases";



  let baraja            = [ ],
      tipo              = ['C','D','H','S'],
      especiales        = ['A','J','K','Q'];
      


 let puntosJugador = 0;
 let puntosJugadores = [];
  //Referencias del html
  
  const btnPedir          = document.querySelector('#btnPedir'),
        smallJugador      = document.querySelectorAll('small'),
        divCartasJugadores  = document.querySelectorAll('.divCartas');

  const btnDetener        = document.querySelector('#btndetener'),
        btnNuevo          = document.querySelector('#btnNuevo');

   

        // esta funcion inicialia el juego  
  const iniciarJuego = (numJugadores = 2) =>{
    baraja = cartasbaraja(tipo,especiales);
    puntosJugadores = [];

    for (let i= 0; i < numJugadores; i++){
        puntosJugadores.push(0);
    }

  smallJugador.forEach (elem => elem.innerText = 0);

  divCartasJugadores.forEach(elem => elem.innerHTML = '');

  btnPedir.disabled = false
  btnDetener.disabled = false
  
  }
  
  //Evento
  
  btnPedir.addEventListener('click', () =>{
      
      
      const carta = pedirCrata(baraja);
      console.log(smallJugador)
      puntosJugador = acumularPuntos(carta, 0, smallJugador, puntosJugadores); 
      crearCarta( carta , 0 , divCartasJugadores);

      
      
  
      if (puntosJugador > 21){
  
          btnPedir.disabled= true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador,baraja,puntosJugadores, smallJugador,divCartasJugadores);
          
      } else if (puntosJugador === 21 ){
          
          btnPedir.disabled= true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador,baraja,puntosJugadores, smallJugador,divCartasJugadores);
        }
      
    })
  
  btnDetener.addEventListener('click', ()=>{
      
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador,baraja,puntosJugadores, smallJugador,divCartasJugadores);
      
      
  })
  
  
  btnNuevo.addEventListener('click', ()=>{

      console.clear();

      iniciarJuego();
      
      console.log('estoy ingresando');
      
      
  })

  

