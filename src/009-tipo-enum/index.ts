enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
}

console.log(Cores[0]);
console.log(Cores.VERMELHO);

/* O TS faz um merge em 2 enums com mesmo nome */
enum Cores {
  ROXO = 3,
  VERDE,
}

export function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(4);
