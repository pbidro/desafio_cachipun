function jugar(){
   

    var juegos = parseInt(prompt("¿cuantos juegos quieres jugar?"));
    console.log(juegos);

    for(var i = 0; i < juegos; i++){


        var jugada = parseInt(prompt("escoje tu jugada \n 1 piedra \n 2 papel \n 3 tijera \n 4 varita mágica"));
        console.log(jugada);
        var pc = Math.floor(Math.random() * 3) + 1;
        console.log(pc);

        if(jugada == pc){
            alert("pc juega lo mismo empate");
        }
        else if(jugada == 1 && pc == 2){
            alert("pc juega papel perdiste");
        }
        else if(jugada == 1 && pc == 3){
            alert("pc juega tijera ganaste");
        }
        else if(jugada == 2 && pc == 1){
            alert("pc juega piedra ganaste");
        }
        else if(jugada == 2 && pc == 3){
            alert("pc juega tijera perdiste");
        }
        else if(jugada == 3 && pc == 1){
            alert("pd juega piedra perdiste");
        }
        else if(jugada == 3 && pc == 2){
            alert("pc juega papel ganaste");
        }
        else if(jugada == 4 ){
            alert("VARITA MÁGICA GANA TODO");
        }
        else{
            alert("no es una jugada valida");
        }
        
    }

    

    
}