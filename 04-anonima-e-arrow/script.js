// EXEMPLO 04 - Callback anonimo e arrow function.

function executar(acao) {
    acao(); // Executar a função que vier como argumento.
}

// Aqui criamos uma função SEM NOME diferente dentro da chamada.
executar(function () {
    console.log("Funcionouu com função anônima!");
});

// Arrow function é uma escrita mais curta para criar uma função.
// O símbolo -> pode ser lido como "Vai executar isto" neste exemplo.

executar(() => {
    console.log("Funcionou com arrow function!");
});

// Nos dois casos, a função só é executada porque executar() chama
