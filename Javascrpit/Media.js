let nota1=Number(prompt("Digite a nota 1"));
let nota2=Number(prompt("Digite a nota 2"));
let nota3=Number(prompt("Digite a nota 3"));

parseInt(nota1);
parseInt(nota2);
parseInt(nota3);

total=nota1+nota2+nota3;
media=total/3;
console.log(media);
if (media >= 70){
    console.log("Aprovado")
}
else {
    console.log("Reprovado")
}
