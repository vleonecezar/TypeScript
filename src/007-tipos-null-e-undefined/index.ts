export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string /* Retorna string ou undefined por ser opcional */;
} {
  return {
    firstName,
    lastName,
  };
}

/* Verificação de parametro desconhecido
   para retornar um valor esperado ou null
*/
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfNumber = squareOf(2);
const squareOfString = squareOf('2');

if (squareOfString === null) {
  console.log('Inválido');
} else {
  console.log(squareOfString * 100);
}
