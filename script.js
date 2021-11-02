
function jugar() {

    var jugada = ['nada', 'piedra', 'papel', 'tijera']
    var player = prompt("Ingresa tu jugada: \n 1-piedra \n 2-papel \n 3-tijera");
    var bot = Math.floor(Math.random() * 3) + 1;
    
    var resultado = '';
    if (player == 1 && bot == 1)
        resultado = (`bot juega ${jugada[bot]} y tu juegas ${jugada[player]} \n Empate`);
    else if (player == 1 && bot == 2)
        resultado = (`bot juega ${jugada[bot]} y tu juegas ${jugada[player]} \n Perdiste`);
    else if (player == 1 && bot == 3)
        resultado = (`bot juega ${jugada[bot]} y tu juegas ${jugada[player]} \n Ganaste`);
    else if (player == 2 && bot == 1)
        resultado = (`bot juega ${jugada[bot]} y tu juegas ${jugada[player]} \n Ganaste`);
    else if (player == 2 && bot == 2)
        resultado = (`bot juega ${jugada[bot]} y tu juegas ${jugada[player]} \n Empate`);
    else if (player == 2 && bot == 3)
        resultado = (`bot juega ${jugada[bot]} y tu juegas ${jugada[player]} \n Perdiste`);
    else if (player == 3 && bot == 1)
        resultado = (`bot juega ${jugada[bot]} y tu juegas ${jugada[player]} \n Perdiste`);
    else if (player == 3 && bot == 2)
        resultado = (`bot juega ${jugada[bot]} y tu juegas ${jugada[player]} \n Ganaste`);
    else if (player == 3 && bot == 3)
        resultado = (`bot juega ${jugada[bot]} y tu juegas ${jugada[player]} \n Empate`);
    else
        resultado = ("Ingresa una jugada valida");

    document.getElementById('resultado').innerHTML = resultado;

}
