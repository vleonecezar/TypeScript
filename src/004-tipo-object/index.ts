const ObjetoA: {
  readonly chaveA: string;
  chaveB: string;
  [key: string]: unknown /* permite add novas chaves e valores depois */;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

ObjetoA.chaveC = 'Valor C';

console.log(ObjetoA);
