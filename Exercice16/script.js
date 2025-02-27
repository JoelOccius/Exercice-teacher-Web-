// 16 Groupes - Atribution de valeurs.

// Les opérateurs «pre» et «post»,«incrément» et «decrément» sont les opérateurs "unaires"
// en javascript,qui sont utilisés pour «augmenter» ou «diminuer» la valeur d'une variable de 1.

// INCREMENT:

// -Le `pré incrément` est représenté par l'opérateur `"++"` avant la variable.
// -Le `post-incrément` est représenté par l'opérateur `"++"` aprèsla variable.


/* Suivez les étapes ci-dessous.
Modifier les valeurs des variables dans le fichier script.js
Le total dans la console.log doit être le nombre 12.
Remarque:
Ne créez pas d'autre fichiers,utilisés simplements les fichiers présents dans fichiers .
Ne modifiez pas les calcules,uniquements les affectations qui sont justes en dessous.
Modifiez les valeurs ici!
*/
let numA;
let numB;
let numC;
let numD;
// Modifiez les valeurs ici!
numA = 3;
numB = 2;
numC = 2;
numD = 3;
// Ne modifiez les frases suivantes
numA++;
numC = numB--;
numC++;
numA = ++numD;

console.log("A:" + numA);
console.log("B:" + numB);
console.log("C:" + numC);
console.log("D:" + numD);

const résultat = numA + numB + numC + numD;
console.log("Total:" + résultat);