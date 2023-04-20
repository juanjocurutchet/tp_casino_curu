import { Dados } from "./dados";
import { Jugador } from "./jugador";
import { MayorOmenor } from "./mayorOmenor";
import { Pantalla } from "./pantalla";
import { TragamonedasCartas } from "./tragamonedasCartas";
import { TragamonedasFrutas } from "./tragamonedasFrutas";

export class Menu{
    public constructor (){
        
    }
    /*public fabrica(pIndice:number, pJugador:Jugador, pPantalla:Pantalla):void{
        let juego;
        switch (pIndice) {
        case 1: 
            juego = new TragamonedasFrutas(pJugador,"La fruta de la fortuna"); 
            juego.juego(pPantalla);       
            break;
        case 2:
            juego = new TragamonedasCartas(pJugador,"Las cartas tienen magia"); 
            juego.juego(pPantalla); 
            break;
        case 3:
            console.log("A las cartas, Mayor o Menor");
            juego = new MayorOmenor(pJugador,"A las cartas, Mayor o Menor"); 
            juego.juego(pPantalla); 
            break;
        case 4:
            juego = new Dados(pJugador,"Dados, dados y mas dados"); 
            juego.jugar(pPantalla);
            break;
        case 0:
            console.log("Gracias por sumarte al cacino");
            break;
        default:
            console.log("No pertence a este cacino");
        }
        

    }*/
   
}
