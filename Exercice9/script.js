// Énergie cinétique.
// Créez un programme qui calculer l'énergie cinétique.Pour ça:
// Demandez un numéro avec invite qui representela masse.
// Demandez un numéro avec invite qui representela lavitesse.
// Affichez l'énergie cinétique totale dans une alert.

// Remarque:
// Les codes doivent être insérés dans le fichier script.js.
// Voici la formule:

// Ec=1/2.m.V²

// Demandez à utilisateur de saisir la masse en (kg),
let masse = parseFloat(prompt("Entre la masse de l'objetc en kg:"));

// Demandez à l'utilisateur de saisir la vitesse en (m/s).
let vitesse = parseFloat(prompt("Entre la vitesse de l'objet en m/s:"));

// Calculer de l'énergie cinétique(Ec = 0.5*masse*vitesse^2).
let ÉnergieCinétique = 0.5 * masse * Math.pow(vitesse, 2);

//Affichage du resultat dans une alert.
alert("L'énergie cinétique totale est:" + ÉnergieCinétique + "Joules");

