/* Unknown é parecido com any só que mais seguro
   porque ele pede uma verificação de tipo com 'if' por exemplo ou então dará erro.
   Diferente do any que pode fazer qualquer coisa
   ** EVITAR USAR O TIPO ANY **
*/
let x: unknown;

x = 'String'; // eslint-disable-line
const y = 10;

console.log(x + y);
