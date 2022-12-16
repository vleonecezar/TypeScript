/* void quando não retorna nada/undefined */
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Vitor',
  sobrenome: 'Cezar',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Vitor', 'Cezar');
pessoa.exibirNome();
