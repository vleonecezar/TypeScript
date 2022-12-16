/* Array[T] ou T[] */
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((acc, valor) => acc + valor, '');
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('v', 'i', 't', 'o', 'r');
const upper = toUpperCase('v', 'i', 't', 'o', 'r');

console.log(result);
console.log(concatenacao);
console.log(upper);
