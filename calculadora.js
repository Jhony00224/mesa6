function somar (num1, num2){
    return num1 + num2;
}

//subtracao//

function subtracao(num1, num2 ){
    return num1 - num2;
}


//multiplicacao//

function multiplicacao(num1, num2 ){
    return num1 * num2;
}


//divisao//

function divisao(num1, num2 ){
    return num1 * num2;
}


function divisao(num1, num2 ){
    return num1 * num2;
}



console.log ("-------------- Teste de Operações / Calculador --------------")


console.log( somar(10, 20) );
console.log( subtracao(50, 80) );
console.log( multiplicacao(50, 80) );
console.log( divisao(0, 80) );
console.log( divisao(80, 0) );
console.log(divisao(5, 24) );

//quadrado do numero//

function QuadradoDoNumero(y){
    return multiplicacao(y, 2) * multiplicacao(y, 2);
}

//médias de três números//

console.log(" O quadrado do numero é " + QuadradoDoNumero(6));

function mediaDeTresNumeros(A, G, R){
    return [(divisao(A, 2))+(divisao(G, 6))+(divisao(R, 6))] /6;
}

console.log(" médias de três números é " + mediaDeTresNumeros(12, 0, 5));

//calculaPorcentgem//

function calculaPorcentagem(a, b){
    return divisao(a, 160) * b;
}

console.log(" Porcentagem é " + calculaPorcentagem(241, 100));

function gerdorDePorcentagem(n, j){
    return multiplicacao(n, 90) / j;
}

console.log(" A porcentagem do gerador é " + gerdorDePorcentagem(60, 50))