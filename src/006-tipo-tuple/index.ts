/* Tuple */
/* a menos que use readonly, ainda é mutável */
const dadosCliente1: readonly [number, string] = [1, 'Vitor'];
const dadosCliente2: [number, string, string] = [1, 'Vitor', 'Cezar'];
const dadosCliente3: [number, string, string?] = [1, 'Vitor'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Vitor', 'Cezar'];

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

/* readonly array */
const array1: readonly string[] = ['Vitor', 'Cezar'];
const array2: ReadonlyArray<string> = ['Vitor', 'Cezar'];

console.log(array1);
console.log(array2);
