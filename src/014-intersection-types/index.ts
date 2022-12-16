type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  nome: 'Vitor',
  sobrenome: 'Cezar',
  idade: 30,
};

console.log(pessoa);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersection = AB & AC; // 'A'

export { pessoa };
