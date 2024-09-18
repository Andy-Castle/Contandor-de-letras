let palabra = "otorrinolaringólogo";
let letra = "o";

function contadorDeLetras(palabra, letra) {
  let letrasTotales = 0;
  letra = letra
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
  let palabraSinAcento = [
    ...palabra
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim(),
  ];

  for (const letter of palabraSinAcento) {
    if (letter == letra) {
      letrasTotales++;
    }
  }
  return `Hay ${letrasTotales} '${letra}' en la palabra ${palabra}`;
}

console.log(contadorDeLetras(palabra, letra));

console.log(contadorDeLetras("Básicamente", "B"));
