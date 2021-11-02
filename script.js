var historial = '';
var historial_show ='';
function jugar() {
    var cantidad_juegos = parseInt(prompt("¿Cuántos juegos quieres jugar?"));
    var jugada = ['nada', 'piedra', 'papel', 'tijera']
    var victorias = 0;
    var derrotas = 0;
    var empates = 0;
    for (var i = 0; i < cantidad_juegos; i++) {

        var jugada_usuario = jugada[parseInt(prompt("¿Qué eliges: 1-piedra, 2-papel, 3-tijera ?"))];
        var jugada_pc = jugada[parseInt(Math.floor(Math.random() * jugada.length))];

        if (jugada_usuario == jugada_pc) {
            
            historial=(" pc jugó " + jugada_pc + " y tu jugaste " + jugada_usuario + " ¡Empate!");
            empates++;
        } else if (jugada_usuario == "piedra" && jugada_pc == "papel") {

            historial=("pc jugó " + jugada_pc + " y tu jugaste " + jugada_usuario + " ¡Gana la PC!");
            derrotas++;
        }
        else if (jugada_usuario == "piedra" && jugada_pc == "tijera") {
            historial=("pc jugó " + jugada_pc + " y tu jugaste " + jugada_usuario + " ¡Gana el usuario!");
            victorias++;
        }
        else if (jugada_usuario == "papel" && jugada_pc == "piedra") {
            historial=("pc jugó " + jugada_pc + " y tu jugaste " + jugada_usuario + " ¡Gana el usuario!");
            victorias++;
        }
        else if (jugada_usuario == "tijera" && jugada_pc == "piedra") {
            historial=("pc jugó " + jugada_pc + " y tu jugaste " + jugada_usuario + " ¡Gana la PC!");
            derrotas++;
        }
        else if (jugada_usuario == "tijera" && jugada_pc == "papel") {
            historial=("pc jugó " + jugada_pc + " y tu jugaste " + jugada_usuario + " ¡Gana el usuario!");
            victorias++;
        }
        else {
            alert("Elige una opción válida");
        }
        alert(historial);
    }

}






