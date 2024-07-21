// 1.Define  valor numérico de las opciones
let PIEDRA = 1;
let PAPEL = 2;
let TIJERA = 3;
// 2.Función que inicia el juego; si quiere jugar y sus posibles respuestas y la cantidad de veces que quiere jugar.
function iniciarJuego() {
    let respuesta = prompt("¿Quieres jugar al cachipún? (si/no)");

    if (respuesta.toLowerCase() === "si") {
        let veces = parseInt(prompt("¿Cuántas veces quieres jugar?", "1"), 10);

        if (isNaN(veces) || veces <= 0) {
            alert("Ingresa un número valido 🤪");
            return;
        }

        for (let i = 0; i < veces; i++) {
            jugarUnaVez(i + 1);
        }
    } else if (respuesta === "no") {
        alert("Ahí, te ves!🫡");
    } else {
        alert("Responde con 'si' o 'no'🙄.");
    }
}
//3.Función que explica como jugar y solicita la elección al jugador.
function jugarUnaVez(numero) {
    let opcionJugador = parseInt(prompt("Elige: 1 para Piedra 🪨, 2 para Papel📄, 3 para Tijera ✂️"), 10);
    let opcionMaquina = Math.floor(Math.random() * 3)+1;

    if (![PIEDRA, PAPEL, TIJERA].includes(opcionJugador)) {
        alert("Elección inválida. Por favor, elige 1, 2 o 3.");
        return;
    }
    alert("Juego " + numero + ": Tú elegiste " + opcionComoTexto(opcionJugador) + ". La compu eligió " + opcionComoTexto(opcionMaquina) + ".");
    let resultado = determinarGanador(opcionJugador, opcionMaquina);
    alert(resultado);
}
//4.Función que le muestra al jugador su elección y la de la máquina.
function opcionComoTexto(opcion) {
    switch(opcion) {
        case PIEDRA:
            return "Piedra 🪨";
        case PAPEL:
            return "Papel 📄";
        case TIJERA:
            return "Tijera ✂️";
    }
}
//5.Función que determina cuando hay empate, ganador o perdedor,según las elecciones de jugador y máquina.
function determinarGanador(Jugador, Maquina) {
    if (Jugador === Maquina) {
        return "A PATE 🤝!";
    } else if (
        (Jugador === PIEDRA && Maquina === TIJERA) ||
        (Jugador === PAPEL && Maquina === PIEDRA) ||
        (Jugador === TIJERA && Maquina === PAPEL)
    ) {
        return "GANASTES 🎉🎉!";
    } else {
        return "PERDISTES 🥲!";
    }
}