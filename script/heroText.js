document.addEventListener("DOMContentLoaded", () =>{
    const now = new Date();
    const heure = now.getHours();
    const message = document.getElementById("greeting");
    if (!message) return;

    // De 2h à 18h => Bonjour
    // De 18h01 à 2h => Bonsoir
    let text = "Bonjour !";
    if (heure >= 2 && heure < 18) {
        text = "Bonjour";
    } else {
        text = "Bonsoir !";
    }
    message.innerHTML = text;
})