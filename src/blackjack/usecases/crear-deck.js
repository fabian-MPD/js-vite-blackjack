import _ from 'underscore'

/**
 *  ESTA FUNCION CREA UN NUEVA BARAJA
 * @param {Array <String>} tiposCartas EJEMPLO  ['C','D','H','S'],
 * @param {Array <String>} tiposEspeciales  EJEMPLO  ['A','J','K','Q'];
 * @returns {Array} -RETORNA UN BARAJA DE CARTAS
 */

export const cartasbaraja = (tiposCartas,tiposEspeciales)=>{

  if(!tiposCartas || tiposCartas.length === 0) throw new Error ('Tipos de carta es obligatorio')
  if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error ('Tipos de carta ESPECIALES es obligatorio')

    let baraja = [];
    
    for (let i = 2 ; i<= 10; i++){
            for (let tip of tiposCartas){
            baraja.push(i + tip );
        }
    }

    for (let ti of tiposCartas){
        for (let espe of tiposEspeciales){
        baraja.push(espe + ti );
        }
    }

  return _.shuffle(baraja); 
}
