// 1.Define  valor numérico de las opciones
let PIEDRA = 1;
let PAPEL = 2;
let TIJERA = 3;
// 2.Función que inicia el juego; si quiere jugar y sus posibles respuestas y la cantidad de veces que quiere jugar.
function iniciarJuego() {
  let respuesta = prompt("¿Quieres jugar al cachipún? (si/no)");

  if (respuesta.toLocaleLowerCase() === "si") {
    let veces = parseInt(prompt("¿Cuántas veces quieres jugar?"));
    if (veces <= 0) {
      alert("Ingresa un número válido");
      return;
    }
    for (let i = 0; i < veces; i++) {
      jugar(i + 1);
    }
  } else if (respuesta === "no") {
    alert("Ahí, te ves!🫡");
  } else {
    alert("Responde con 'si' o 'no'🙄.");
    return;
  }
}
//3.Función que explica como jugar y solicita la elección al jugador.
function jugar(cantidad) {
  let opcionJugador = parseInt(prompt("Elige: 1 para Piedra 🪨, 2 para Papel📄, 3 para Tijera ✂️")
  );
  let opcionMaquina = Math.floor(Math.random() * 3);

  alert("Juego " + cantidad + ": Tú elegiste " +opcionTexto(opcionJugador) +". La compu eligió " + opcionTexto(opcionMaquina) + ".");
  let resultado = Ganador(opcionJugador, opcionMaquina);
  alert(resultado);
}
//4.Función que le muestra al jugador su elección y la de la máquina.
function opcionTexto(opcion) {
  switch (opcion) {
    case PIEDRA:
      return "Piedra 🪨";
    case PAPEL:
      return "Papel 📄";
    case TIJERA:
      return "Tijera ✂️";
  }
}
//5.Función que determina cuando hay empate, ganador o perdedor,según las elecciones de jugador y máquina.
function Ganador(Jugador, Maquina) {
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
