const nome="Alex";
let idade=Number(prompt("Digite sua idade"));

if (idade <= 5) {
    console.log(nome+ " é um Bebê.");
} 
else if(idade <= 10) {
    console.log(nome+ " é uma Criança.")
}
else if(idade <= 15) {
    console.log(nome+ " é um Pré Adolescente")
}
else if(idade <= 18) {
    console.log(nome+ " é um Adolescente")
}
else if(idade <= 60) {
    console.log(nome+ " é um Adulto")
}
else if(idade <= 90) {
    console.log(nome+ " é um Idoso")
}
else {
    console.log(nome+ " é um Mumm-Rá")
}