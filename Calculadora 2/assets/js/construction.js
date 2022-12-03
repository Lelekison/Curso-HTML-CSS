class Pessoas{
    constructor (nome,cpf,nascimento){
        this.nome = nome;
        this.cpf = cpf;
        this.nascimento = nascimento
    }
}
const p2 = new Pessoas('Gilberto', 123123123123, '10.12.1998');
const p3 = new Pessoas('Neymar', 1231231223, '29.2.1995')
console.log(p2.nascimento);
console.log(p2.nome);
