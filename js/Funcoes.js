//function soma (x, y) {
    //const resultado = x + y;
    //return resultado;
//}
//console.log (soma(2 , 3));
//console.log (soma(10 , 5));
//console.log (soma (60 , 70));
//console.log (soma(2456 , 678));
//console.log (soma(12 , 12));

//function saudacao(){
    //console.log("bom dia");
//}
//saudacao();
//function saudacao1 (nome) {
    //console.log('bom dia ${nome}');
//}
//saudacao1('maria');
//function saudacao1(nome){
    //return 'bom dia  ${nome}';
//}
//const variavel=saudacao1 ('maria Juliana');
//console.log(variavel)

//const raiz = function(n){
    //return n ** 0.5;
//};

//console.log(raiz(9));

//const raiz1= (n) => {
    //return n ** 0.5;
//}
//console.log(raiz1(81));

//const raiz2=n => n ** 0.5;
//console.log(raiz2(6561));




//const fruta=["banana", "maça", "laranja", "goiaba", "abacaxi"];
//console.log(fruta[3],[2]);
//console.log(fruta.length);
//fruta.push("abacate");
//console.log(fruta)

//const nomes=[];
//nomes.push=('teste');
//nomes.push+=(' teste2');

//console.log(nomes);



//const nome="luis";
//const sobrenome="augusto";
//const idade="45";

//const pessoa1={
    //nome:"luis",
    //sobrenome:"augusto",
    //idade:"45",
    //altura:"1.75"
//};

//console.log(pessoa1.nome);
//console.log(pessoa1.sobrenome);
//console.log(pessoa1.altura)

//const pessoa2={
    //nome:"anderson",
    //sobrenome:"tabaresco",
    //idade:"24",
    //altura:"1.89"
//};
//const pessoa3={
    //nome:"gabriel",
    //sobrenome:"monteiro",
    //idade:"15",
    //altura:"1.70"
//};

//function criaPessoa(nome, sobrenome, idade, altura){
    //return{
        //nome,
        //sobrenome,
        //idade,
        //altura
    //};
//}
//const pessoa1=criaPessoa("luis","augusto", 45, 1.75)
//const pessoa2=criaPessoa("anderson","tabaresco",24,1.89)
//const pessoa3=criaPessoa("gabriel","monteiro",15,1.70)
//console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)
//console.log(pessoa2.sobrenome, pessoa1.sobrenome, pessoa3.sobrenome)
//console.log(pessoa3.altura, pessoa1.altura, pessoa2.altura)


function criaRPG(raça, reino, armamento, classe){
    return{
        raça: elfo, anão, humano,
        reino: elfico, humano, yordingard,
        armamento: arco, espada, soqueiras,
        classe: ladino, guerreiro, ladrão,
    };
}
const player1=criaRPG("elfo", "elfico", "arco", "ladino");
const player2=criaRPG("anão", "yordingard", "espada", "guerreiro");
const player3=criaRPG("humano", "elfico", "soqueiras", "ladrão");


console.log(player1.raça, player2.raça, player3.raça);
console.log(player1.armamento, player2.armamento, player3.armamento);
console.log(player1.classe, player2.classe, player3.classe);
