const pessoa = {
  nome: 'Vitor' as const, //Se tornou literal e ñão pode ser alterado.
  sobrenome: 'Cezar',
};

console.log(typeof pessoa.nome);

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Vermelho'));

/* Module mode */
export default 1;
