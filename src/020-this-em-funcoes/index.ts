// this: Date não é um argumento mas sim o typo do this

export function funcao(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}

funcao.call(new Date(), 'Vitor', 30);
