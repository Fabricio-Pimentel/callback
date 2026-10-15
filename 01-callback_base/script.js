// EXEMPLO 01 - Callback básico
// Objetivo: entender que podemos ENTREGAR uma função para outra função.

// Esta função sabe qual mensagem deve mostrar

function dizerola() {
    console.log("Olá, turma!")
}

// O parâmetro "funcaoRecebida" receberá uma função.
// O nome do parâmetro é livre: não precisa se chamar "callback".

function executar(funcaoRecebida) {
    funcaoRecebida(); // Os parenteses fazzem a função recebida EXECUTAR.
}

//Sem parenteses: entregues a função dizerOls, sem executá-la aqui.
executar(dizerola);
//SAÍDA: Olá, turma!
