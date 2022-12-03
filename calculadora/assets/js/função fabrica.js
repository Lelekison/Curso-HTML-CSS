function criaPessoa(nome, sobrenome, altura,peso);
return {
    nome,
    sobrenome,
    altura,
    peso,

    //getter
get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
},

//setter
set nomeCompleto (valor) {
    valor = valor.split('');
    this.nome = valor.shift();
    this.sobrenome = valor.join('')

},

fala(assunto= 'falando sobre JavaScript') {
    return `${this.nome} está ${assunto}.`;
},

//getter
get imc() {
    const indice = this.peso / (this.altura * this.altura); 
    return indice.toFixed(2);
}
};

const p1 = criaPessoa('andré','josefino', 1.70, 59);
const p2 = criaPessoa('gabriela','silva', 1.47, 40);
const p3 = criaPessoa('karen','constantine', 1.63, 52);

console.log(p1.imc);
console.log(p1.nomeCompleto);
console.log(p2.imc);
console.log(p2.nome);
console.log(p3.imc);
console.log(p3.sobrenome);
console.log(p3.fala());
