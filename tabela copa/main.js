function createGame(player1, hour, player2) {
    return `
    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
    </li>
    ` 
}

let delay = -0.4;
function creatCard(date, day, game) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
        ${game}
        </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML =
    creatCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
    creatCard("28/11", "segunda", createGame("switzerland", "13:00", "brazil")) +
    creatCard("28/11", "segunda", createGame("portugal", "16:00" ,"uruguai")) +
    creatCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon")) +
    creatCard("20/11", "quinta", createGame("cameroon", "16:00", "brazil"))
    