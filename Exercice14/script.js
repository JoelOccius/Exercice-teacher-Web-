// 14 Groupes - Formules de physique.

// Créez un programme qui calculer la force(loi de newton) et la puissance.
// La formule de force est: F = m*ac.
// Où: F est la force,m est la masse de l'object et ac est l'accélération.

// La formule de la puissace est:
// P = w/t.
// Où: P est la puissance,west letravail éffectué et t est temp.

// Pour ça:
// 
// Demandez à l'utilisateur les valeurs utilisées dans les formulesavec une invite.
// Afficher le résultat de chaque formule dans une alert.

let masse = parseFloat(prompt("Quelle est l'accélération"));
let accélération = parseFloat(prompt("Quelle est l'accélération"));

let force = masse * accélération;
alert(`la force est ${force}`);


let travail = parseFloat(prompt("informe le travail realiser"));
let temps = parseFloat(prompt("Quelle est le temps"));

let puissance = travail / temps;
alert(`la force est ${puissance}`);