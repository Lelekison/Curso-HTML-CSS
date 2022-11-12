let nome="leonardo"
let peso= 70;
let altura=1.69;
let idade=18;

imc=peso/(altura*altura);
console.log(imc)


if (imc <= 17) {
    console.log("meu nome é " +nome+ ", tenho " +idade+ " de idade e meu IMC é " +imc+ " e estou muito abaixo do peso")
}else if (imc <=18.49) {
    console.log("meu nome é " +nome+ ", tenho " +idade+ " de idade e meu IMC é " +imc+ " e estou abaixo do peso")
}else if (imc <= 24.99) {
    console.log("meu nome é " +nome+ ", tenho " +idade+ " de idade e meu IMC é " +imc+ " e estou no peso ideal")
}else if (imc <= 29.99) {
        console.log("meu nome é " +nome+ ", tenho " +idade+ " de idade e meu IMC é " +imc+ " e estou acima do peso")
}else if (imc <= 34.99) {
    console.log("meu nome é " +nome+ ", tenho " +idade+ " de idade e meu IMC é " +imc+ " e estou muito acima do peso")
}else if (imc <= 39.99) {
    console.log("meu nome é " +nome+ ", tenho " +idade+ " de idade e meu IMC é " +imc+ " e estou obeso")
}else if (imc >=40) {
    console.log("meu nome é " +nome+ ", tenho " +idade+ " de idade e meu IMC é " +imc+ " e tenho obesidade morbida")
}