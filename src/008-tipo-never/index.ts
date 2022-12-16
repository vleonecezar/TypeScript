/* quando nunca se retorna nada; um looping infinito ou erro, por exemplo */
export function criaErro(): never {
  throw new Error('Qualquer erro');
}

criaErro();
