function calculadoraTabuada () {
    let tabuada = document.querySelector("#tabuada tbody");
    let valorA = parseInt(document.querySelector("#valorA").value);
    tabuada.innerHTML="";
    for (let valorB = 0; valorB<=10; valorB++){
        let resultado = valorA * valorB;
        let template = `
        <td>${valorA}</td
        <td>x</td>
        <td>${valorB}</td>
        <td>=</td>
        <td>${resultado}</td>`;
        let tr = document.createElement('tr');
        tr.innerHTML = template;
        tabuada.append(tr);
    }
}
calculadoraTabuada();
document.querySelector("valorA").addEventListener('change',calculadoraTabuada);
