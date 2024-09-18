let palabra = "otorrinolaringólogo";
let letra = "r";

function contadorDeLetras(palabra, letra) {
  let letrasTotales = 0;
  let palabraSinAcento = [
    ...palabra
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase(),
  ];

  for (const letter of palabraSinAcento) {
    if (letter == letra.toLowerCase()) {
      letrasTotales++;
    }
  }
  return `Hay ${letrasTotales} ${letra.toLowerCase()} en la palabra ${palabra}`;
}

console.log(contadorDeLetras(palabra, letra));

console.log(contadorDeLetras("Básicamente", "B"));
