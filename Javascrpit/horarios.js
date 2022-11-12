const nome="Josefino";
let horario=Number(prompt("Digite as horas"));

if(horario <= 4) {
    console.log("Boa Noite!! "+nome);
}
else if (horario <= 11) {
    console.log(" Bom Dia! "+nome);
} 
else if(horario <=18) {
    console.log(" Boa Tarde! "+nome);
}
else if(horario <= 24) {
    console.log("Boa Noite!! "+nome);
}

