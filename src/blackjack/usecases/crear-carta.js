
export const crearCarta = (carta, turno, divCartasJugadores)=>{


    const crearCarta = document.createElement('img');
        // crearCarta.src= ` assets/cartas/${carta}.png`;
        crearCarta.src= ` public/assets/cartas/${carta}.png`;
        console.log(crearCarta)
        crearCarta.classList.add('carta')
        console.log(divCartasJugadores)
        divCartasJugadores[turno].append(crearCarta)


}