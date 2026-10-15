// EXEMPLO 02 - A mesma função executando ações diferente.

function ligar() {
    console.log("Maquina ligada!");
}

function desligar() {
    console.log("Maquina desligada!");
}

//"acao" é o nome do parâmetro que vai guardaar a função recebida.
function controlarMaquina(acao) {
    acao(); //Executa a função que foi recebida neste momento
}

controlarMaquina(ligar); //Entrega a função ligar.
controlarMaquina(desligar); //Agora entrega a função desligar.
// Saída: Máquina ligada / Máquina desligada!
