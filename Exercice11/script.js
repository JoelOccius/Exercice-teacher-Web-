// La vitesse moyenne:
// Créez un programme qui calcule la vitesse moyenne.
// La formule est:vm = dist/t.
// Où: vm est la vitesse dist est la distance parcourue et t est le temps.
// Pour ça:

// Demandez à l'utilisateur les valeurs utilisées dans la formule avec une invite.
// Afficher le résultat de l'applicacation de la formule dans une alert.

let distance = parseFloat(prompt("entrer la distance parcourue(en km):"));
let temps = parseFloat(prompt("entrer le temps mis(en heure):"));

if(!isNaN(distance)&& distance > 0 && !isNaN (temps) && temps > 0){
    let vitesseMoyenne = distance / temps;
    alert("La vitesse moyenne est de "+ vitesseMoyenne.toFixed(2) + "k/m");
}
else{
    alert("Veillez entrer des valeurs valides pour la distance et le temps. ");
}
